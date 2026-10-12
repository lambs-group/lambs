import { useEffect, useState } from "react";
import { FadeIn } from "../../FadeIn";
import { Button } from "../../Button";
import { Turnstile } from "../../Turnstile";
import { withBase } from "../../../utils/paths";
import { submitForm } from "../../../utils/submit-form";
import { VACANCIES, type Vacancy } from "../../../data/vacancies";

const GENERAL = "general";

interface ApplicationFormProps {
  /** Set on a job's own page: the application is for that role. Omit for the open application. */
  vacancy?: Vacancy;
}

/** Careers application form (CV upload). Emails careers@ via the forms worker with the role,
 *  its slug and a link back to the job page so the team can see what was applied for. */
export function ApplicationForm({ vacancy }: ApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "preview" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [selected, setSelected] = useState(vacancy?.slug ?? GENERAL);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
    // Open-application page: /careers/apply?role=<slug> preselects a vacancy.
    if (!vacancy) {
      const wanted = new URLSearchParams(window.location.search).get("role");
      if (wanted && VACANCIES.some((v) => v.slug === wanted)) setSelected(wanted);
    }
  }, [vacancy]);

  const chosen = vacancy ?? VACANCIES.find((v) => v.slug === selected);
  const roleTitle = chosen ? chosen.title : "General application";
  const roleSlug = chosen ? chosen.slug : GENERAL;
  const roleUrl = origin + withBase(chosen ? `/careers/${chosen.slug}` : "/careers/apply");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const result = await submitForm(e.currentTarget, "careers-application");
    if (result.status === "ok") setStatus("done");
    else if (result.status === "preview") setStatus("preview");
    else {
      setStatus("error");
      setError(result.message);
    }
  }

  if (status === "done" || status === "preview") {
    return (
      <FadeIn>
        <div className="bg-[var(--color-dark-blue)] text-white p-10">
          <h3 className="text-2xl font-semibold mb-3 text-white">Thanks - we've got it.</h3>
          <p className="text-white/80">
            {status === "preview"
              ? "Preview mode - the form handler isn't configured yet, so this submission wasn't sent. In production we'd be in touch within one working day."
              : "We'll be in touch within one working day."}
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={120}>
      <form
        className="flex flex-col gap-6 bg-white p-8 lg:p-10 border border-[var(--color-border)]"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input type="hidden" name="role" value={roleTitle} />
        <input type="hidden" name="role_slug" value={roleSlug} />
        <input type="hidden" name="role_url" value={roleUrl} />
        {/* Honeypot - real users never fill this. */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

        {!vacancy && VACANCIES.length > 0 && (
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium">Role you're interested in</span>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="bg-transparent border-0 border-b border-[var(--color-border-strong)] py-3 text-[var(--color-dark-blue)] focus:border-[var(--color-dark-blue)] focus:border-b-2 focus:outline-none transition-colors"
            >
              <option value={GENERAL}>General application - no specific role</option>
              {VACANCIES.map((v) => (
                <option key={v.slug} value={v.slug}>{v.title}</option>
              ))}
            </select>
          </label>
        )}

        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Location / postcode" name="location" />

        <CvField fileName={fileName} onChange={setFileName} />

        <TextareaField
          label="Cover note"
          name="message"
          placeholder="Briefly - the work you do, relevant tickets, current notice period, anything you want us to know."
        />

        <Turnstile />

        {error && <p className="text-[13px] text-red-600">{error}</p>}

        <div className="pt-2">
          <Button variant="primary" size="lg" type="submit">
            {status === "sending" ? "Sending…" : vacancy ? `Apply for ${vacancy.title}` : "Send my CV"}
          </Button>
        </div>

        <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-mid-blue)] mt-2">
          Prefer email? Send your CV to{" "}
          <a
            href={`mailto:careers@lambsgroup.co.uk?subject=Application - ${encodeURIComponent(roleTitle)}`}
            className="text-[var(--color-dark-blue)] underline underline-offset-2 decoration-[var(--color-cyan)]"
          >
            careers@lambsgroup.co.uk
          </a>
        </p>
      </form>
    </FadeIn>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium">
        {label}{required && <span className="text-[var(--color-cyan)] ml-0.5">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="bg-transparent border-0 border-b border-[var(--color-border-strong)] py-3 text-[var(--color-dark-blue)] focus:border-[var(--color-dark-blue)] focus:border-b-2 focus:outline-none transition-colors"
      />
    </label>
  );
}

function TextareaField({ label, name, placeholder, required }: { label: string; name: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium">
        {label}{required && <span className="text-[var(--color-cyan)] ml-0.5">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={4}
        placeholder={placeholder}
        className="bg-transparent border-0 border-b border-[var(--color-border-strong)] py-3 text-[var(--color-dark-blue)] placeholder:text-[var(--color-mid-blue)]/60 focus:border-[var(--color-dark-blue)] focus:border-b-2 focus:outline-none transition-colors resize-none"
      />
    </label>
  );
}

function CvField({ fileName, onChange }: { fileName: string | null; onChange: (n: string | null) => void }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium">
        CV <span className="text-[var(--color-cyan)] ml-0.5">*</span>
      </span>
      <div className="flex items-center gap-4 py-3 border-b border-[var(--color-border-strong)]">
        <input
          type="file"
          name="cv"
          required
          accept=".pdf,.doc,.docx,.odt,.rtf,.txt"
          onChange={(e) => onChange(e.target.files?.[0]?.name ?? null)}
          className="text-[13px] text-[var(--color-dark-blue)] file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[var(--color-dark-blue)] file:text-white file:text-[11px] file:uppercase file:tracking-[0.14em] file:font-medium file:cursor-pointer hover:file:bg-[var(--color-cyan)] hover:file:text-[var(--color-dark-blue)] file:transition-colors"
        />
        {fileName && (
          <span className="text-[12px] text-[var(--color-dark-blue)] truncate max-w-[200px]">{fileName}</span>
        )}
      </div>
      <span className="text-[11px] text-[var(--color-mid-blue)] mt-1">
        PDF or Word doc, up to 10&nbsp;MB
      </span>
    </label>
  );
}
