import type { ReactNode } from "react";

/** Highlighted marker for content still awaited from Lambs. Search for "TO CONFIRM" before launch. */
export function Todo({ children }: { children: ReactNode }) {
  return <mark className="bg-yellow-200 text-[var(--color-dark-blue)] px-1 font-medium">[TO CONFIRM: {children}]</mark>;
}
