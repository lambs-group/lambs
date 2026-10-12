# Live works map - weekly update

The "Where we're working" map reads `src/data/live-works.json`. Replace that one file each week; the site rebuilds and redeploys automatically (about a minute).

## File format

```json
{
  "lastUpdated": "2026-10-12",
  "dots": [
    { "location": "Warrington",  "sector": "Telecoms",      "status": "Active", "note": "Motif rollout" },
    { "location": "Leeds",       "sector": "Utilities",     "status": "Active", "note": "Mains - housing scheme" },
    { "location": "WA1",         "sector": "Private Works", "status": "Active", "note": "Domestic drives" }
  ]
}
```

| Field | Required | Notes |
|---|---|---|
| `location` | yes | A **postcode district** (e.g. `WA1`, `LS6`, `B15`) or a **town/city name**. |
| `sector` | yes | Exactly one of `Telecoms`, `Utilities`, `Private Works`. |
| `status` | no | Defaults to `Active`. Shown in the map popup. |
| `note` | no | Short description shown in the popup. Keep it free of client names under NDA. |
| `region` | no | Overrides the popup heading. By default it's worked out from the location. |
| `id` | no | Only needed if you want stable ids. Must be unique. |
| `lastUpdated` | no | Shown under the full map. Defaults to the build date. |

### Privacy rules (the repo and the map are public)
- **Do not put full postcodes or street addresses in this file**, especially for Private Works. Use the district (`WA1`) or town only. A full postcode on a Private Works entry fails the build. On other sectors it is shortened to the district with a warning.
- Dots are plotted at district/town level with a small offset, so they never show an exact address.

## How to update (no coding)
1. Open https://github.com/lambs-group/lambs/blob/main/src/data/live-works.json
2. Click the pencil icon, paste the new JSON, and choose **Commit changes** (commit directly to `main`).
3. Watch the **Actions** tab. A green tick means the map is updated.

Or use **Add file -> Upload files** in `src/data/` to replace the file.

## If something is wrong
The build checks the file before publishing. If it fails, the **previous map stays live** and the Action shows a red cross with a plain message, for example:
- invalid JSON (a missing comma or bracket)
- an unknown `sector`
- a Private Works entry with a full postcode
- an entry with no `location`

A town name that can't be found is **skipped with a warning** and the rest still publish. Check the Action log and retry with the postcode district.

## Developer notes
- `scripts/build-live-works.mjs` runs before `npm run dev` and `npm run build`. It converts `location` to coordinates using the free [postcodes.io](https://postcodes.io) API and writes `src/data/live-works.resolved.json` (git-ignored, read by `UKMap.tsx`).
- Lookups are cached in `src/data/geocode-cache.json` (committed), so each place is only fetched once and builds keep working if postcodes.io is down for places already seen.
- To refresh locally after editing the file: `npm run build:data`.
- Entries that already have `lat`/`lng` are used exactly as given (legacy format).
