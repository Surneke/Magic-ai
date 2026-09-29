import { Icon, SectionHeading, sectionX } from "./ui";

const stories = [
  {
    quote:
      "The academy replaced six months of scattered tutorials with a clear build–measure–improve loop. I shipped a credible RAG system and could finally explain every tradeoff.",
    initials: "NW",
    name: "Noah Williams",
    role: "Data analyst → AI engineer",
    outcome: "Hired in 10 weeks",
  },
  {
    quote:
      "The evaluation module changed how our team works. We stopped demo-driven development and started making decisions from test sets, traces, and user signals.",
    initials: "PS",
    name: "Priya Shah",
    role: "Senior product manager",
    outcome: "Promoted to AI product lead",
  },
  {
    quote:
      "The mentor reviews were exacting and practical. My capstone became the architecture we now use for an internal support copilot.",
    initials: "ML",
    name: "Marcus Lee",
    role: "Full-stack developer",
    outcome: "Pilot adopted at work",
  },
];

export function Testimonials() {
  return (
    <section className={`flex flex-col gap-14 py-20 lg:py-28 ${sectionX}`}>
      <SectionHeading
        className="max-w-[720px]"
        eyebrow="Learner signal"
        title="Career momentum you can point to."
        description="Our learners do more than complete lessons. They change roles, raise the quality bar on their teams, and ship systems people trust."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {stories.map((story) => (
          <figure
            key={story.name}
            className="flex flex-col items-start gap-6 rounded-[10px] border border-line-strong bg-surface p-[26px]"
          >
            <Icon name="quote" width={22} />
            <blockquote className="text-body-m text-ink">
              “{story.quote}”
            </blockquote>
            <figcaption className="mt-auto flex w-full items-center gap-3">
              <span className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-cyan/10 text-caption text-cyan">
                {story.initials}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-[3px]">
                <span className="text-label-m text-ink">{story.name}</span>
                <span className="text-caption text-ink-3">{story.role}</span>
              </span>
            </figcaption>
            <div className="flex items-center gap-2 rounded-md bg-white/6 px-2.5 py-[7px]">
              <Icon name="trending-up" width={14} />
              <span className="text-caption text-success">{story.outcome}</span>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
