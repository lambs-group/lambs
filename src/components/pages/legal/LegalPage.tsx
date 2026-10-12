import type { ReactNode } from "react";
import { PageShell } from "../../sections/PageShell";
import { PageHero } from "../../sections/PageHero";
import { withBase } from "../../../utils/paths";
import { COMPANY, TBC } from "./company";

export function Val({ v, label }: { v: string | typeof TBC; label: string }) {
  if (v === TBC) {
    return (
      <mark className="bg-yellow-200 text-[var(--color-dark-blue)] px-1 font-medium">[TO CONFIRM: {label}]</mark>
    );
  }
  return <>{v}</>;
}

export function Tbc({ children }: { children: ReactNode }) {
  return <mark className="bg-yellow-200 text-[var(--color-dark-blue)] px-1 font-medium">[TO CONFIRM: {children}]</mark>;
}

const linkCls = "underline underline-offset-2 decoration-[var(--color-cyan)]";

/** Internal link - must go through withBase or it 404s on the /lambs preview. */
export function A({ href, children }: { href: string; children: ReactNode }) {
  return <a className={linkCls} href={withBase(href)}>{children}</a>;
}

export function Mail({ address }: { address: string }) {
  return <a className={linkCls} href={`mailto:${address}`}>{address}</a>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-[var(--color-dark-blue)] text-[24px] lg:text-[28px] font-semibold leading-tight mt-14 mb-4">{children}</h2>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[var(--color-charcoal)] text-[16px] leading-relaxed mb-4">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 mb-4 flex flex-col gap-2 text-[var(--color-charcoal)] text-[16px] leading-relaxed">{children}</ul>;
}

interface LegalPageProps {
  eyebrow: string;
  heading: string;
  lede: string;
  children: ReactNode;
}

export function LegalPage({ eyebrow, heading, lede, children }: LegalPageProps) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} heading={heading} lede={lede} sectionIndex={`Last updated ${COMPANY.lastUpdated}`} />
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[820px] mx-auto px-5 sm:px-8 lg:px-12 [&>h2:first-child]:mt-0">{children}</div>
      </section>
    </PageShell>
  );
}
