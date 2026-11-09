import { Construction, SquareStack, Shovel, BrickWall, House, AppWindow, Hammer, Wrench, Zap } from "lucide-react";
import { Todo } from "../../Placeholder";
import { FadeIn } from "../../FadeIn";
import { AnimatedHeading } from "../../AnimatedHeading";
import { SERVICE_GROUPS } from "./serviceGroups";

const icons = [Construction, SquareStack, Shovel, BrickWall, House, AppWindow, Hammer, Wrench, Zap];

export function PrivateServicesGrid() {
  return (
    <section className="bg-[var(--color-light-grey)] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <FadeIn><span className="eyebrow">What we do</span></FadeIn>
          </div>
          <div className="lg:col-span-8">
            <AnimatedHeading as="h2" className="max-w-3xl">
              Building, joinery and groundworks. One trusted team.
            </AnimatedHeading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-strong)]">
          {SERVICE_GROUPS.map((s, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={s.title} delay={i * 100} className="bg-[var(--color-light-grey)] p-8 group hover:bg-white transition-colors duration-500">
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-dark-blue)] group-hover:bg-[var(--color-cyan)] transition-colors duration-500 mb-6">
                  <Icon className="w-6 h-6 text-white group-hover:text-[var(--color-dark-blue)] transition-colors duration-500" strokeWidth={1.8} />
                </div>
                <h3 className="text-[22px] lg:text-[26px] font-semibold text-[var(--color-dark-blue)] mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[var(--color-charcoal)] text-[15px] leading-relaxed">{s.blurb}</p>
                {s.todo && <p className="mt-3 text-[13px]"><Todo>{s.todo}</Todo></p>}
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={200}>
          <p className="mt-12 text-[var(--color-dark-blue)] text-[18px] lg:text-[20px] font-medium max-w-3xl">
            We welcome smaller building and landscaping jobs and can also provide labour-only services.
          </p>
          <p className="mt-4 text-[var(--color-charcoal)] text-[16px] max-w-3xl">
            Specialist trades, including electrical, gas and plumbing, are carried out by qualified tradespeople we work with.{" "}
            <Todo>gas and plumbing qualifications and registrations, awaiting Lambs</Todo>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
