import { sectionX } from "./ui";

const metrics = [
  { value: "86%", label: "ship a portfolio project", note: "within 8 weeks" },
  { value: "12K+", label: "practitioners learning", note: "across 74 countries" },
  { value: "4.9 / 5", label: "average cohort rating", note: "from verified learners" },
  { value: "3.2×", label: "faster skill progression", note: "vs. solo study" },
];

export function Outcomes() {
  return (
    <section
      className={`flex flex-col gap-8 border-y border-line bg-surface py-11 ${sectionX}`}
    >
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <span className="text-caption text-cyan">Proof, not promises</span>
        <p className="text-body-s text-ink-2 md:w-[520px] md:text-right">
          Measured learning outcomes from our last four cohorts.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-7 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.value}
            className="flex flex-col gap-2.5 border-l border-line-strong pl-5"
          >
            <span className="font-mono text-[28px] font-medium text-ink">
              {metric.value}
            </span>
            <span className="text-body-s text-ink-2">{metric.label}</span>
            <span className="text-caption text-ink-3">{metric.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
