// Server-side checks for uploaded files. The browser's `accept` attribute is only a hint, so the
// Worker re-checks every attachment: allowed extension for the form, matching file signature,
// size limits and a cleaned file name. Anything else is refused before an email is sent.

export const MAX_FILE_BYTES = 10 * 1024 * 1024;
export const MAX_TOTAL_BYTES = 20 * 1024 * 1024;
export const MAX_FILES = 5;
export const MAX_FIELDS = 60;
export const MAX_FIELD_CHARS = 10000;

const DOCUMENT_TYPES = ["pdf", "doc", "docx", "odt", "rtf", "txt"];
const IMAGE_TYPES = ["jpg", "jpeg", "png", "webp", "gif", "heic", "heif"];

/** Careers applications take CVs and documents; the contact and quote forms take photos. */
export function allowedExtensions(formType: string): string[] {
  return formType === "careers-application" ? DOCUMENT_TYPES : IMAGE_TYPES;
}

function startsWith(b: Uint8Array, sig: number[], offset = 0): boolean {
  return sig.every((v, i) => b[offset + i] === v);
}

function ascii(b: Uint8Array, offset: number, text: string): boolean {
  return startsWith(b, [...text].map((c) => c.charCodeAt(0)), offset);
}

function signatureMatches(ext: string, b: Uint8Array): boolean {
  switch (ext) {
    case "pdf":
      return ascii(b, 0, "%PDF");
    case "docx":
    case "odt":
      return startsWith(b, [0x50, 0x4b, 0x03, 0x04]);
    case "doc":
      return startsWith(b, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
    case "rtf":
      return ascii(b, 0, "{\\rtf");
    case "txt":
      return !b.subarray(0, 4096).includes(0);
    case "jpg":
    case "jpeg":
      return startsWith(b, [0xff, 0xd8, 0xff]);
    case "png":
      return startsWith(b, [0x89, 0x50, 0x4e, 0x47]);
    case "gif":
      return ascii(b, 0, "GIF8");
    case "webp":
      return ascii(b, 0, "RIFF") && ascii(b, 8, "WEBP");
    case "heic":
    case "heif":
      return ascii(b, 4, "ftyp");
    default:
      return false;
  }
}

export function extensionOf(filename: string): string {
  const m = /\.([A-Za-z0-9]+)$/.exec(filename.trim());
  return m ? m[1].toLowerCase() : "";
}

/** Returns an error message for the visitor, or null when the file is acceptable. */
export function checkAttachment(formType: string, filename: string, bytes: Uint8Array): string | null {
  const ext = extensionOf(filename);
  const allowed = allowedExtensions(formType);
  if (!allowed.includes(ext)) {
    return `"${cleanFilename(filename)}" is not an accepted file type. Please attach ${allowed.map((e) => "." + e).join(", ")}.`;
  }
  if (!signatureMatches(ext, bytes)) {
    return `"${cleanFilename(filename)}" does not look like a valid .${ext} file.`;
  }
  return null;
}

/** Strips any path and unusual characters, and caps the length, keeping the extension. */
export function cleanFilename(filename: string): string {
  const base = filename.split(/[\\/]/).pop() ?? "";
  const ext = extensionOf(base);
  const stem = (ext ? base.slice(0, -(ext.length + 1)) : base)
    .replace(/[^A-Za-z0-9 ._()\-]/g, "_")
    .replace(/\.{2,}/g, ".")
    .trim()
    .slice(0, 80);
  return `${stem || "attachment"}${ext ? "." + ext : ""}`;
}
