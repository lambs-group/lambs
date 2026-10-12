// Compact schematic for the Utilities hero: power, water and gas lines route
// in at right angles to one junction, then leave as a single connection.
// Animation lives in global.css (.utility-network) so reduced-motion can switch it off.
const POWER = "#264A88";
const WATER = "#7DA0C3";
const GAS = "#6CC5EA";

const lines = [
  { cls: "un-power", colour: POWER, d: "M 16 56 H 170 V 124" },
  { cls: "un-water", colour: WATER, d: "M 16 150 H 144" },
  { cls: "un-gas", colour: GAS, d: "M 16 244 H 170 V 176" },
];

export function UtilityNetwork({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`utility-network ${className}`}
      viewBox="0 0 320 300"
      fill="none"
      aria-hidden="true"
    >
      {/* Static rails */}
      {lines.map((l) => (
        <path key={`r-${l.cls}`} d={l.d} stroke={l.colour} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.28" />
      ))}
      <path d="M 196 150 H 292" stroke={POWER} strokeWidth="2" strokeLinecap="round" opacity="0.28" />

      {/* Moving pulses */}
      {lines.map((l) => (
        <path
          key={`p-${l.cls}`}
          className={`un-pulse ${l.cls}`}
          d={l.d}
          pathLength={100}
          stroke={l.colour}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      <path className="un-pulse un-out" d="M 196 150 H 292" pathLength={100} stroke={POWER} strokeWidth="3.5" strokeLinecap="round" />

      {/* Junction */}
      <circle className="un-ripple" cx="170" cy="150" r="30" stroke={GAS} strokeWidth="1.5" />
      <circle className="un-ripple un-ripple--2" cx="170" cy="150" r="30" stroke={GAS} strokeWidth="1.5" />
      <rect x="142" y="122" width="56" height="56" rx="10" fill="#0E2A5C" />
      <circle className="un-core" cx="170" cy="150" r="7" fill={GAS} />

      {/* Connection point */}
      <circle cx="302" cy="150" r="9" fill="#fff" stroke={POWER} strokeWidth="2" />
      <circle className="un-end" cx="302" cy="150" r="3.5" fill={POWER} />
    </svg>
  );
}
