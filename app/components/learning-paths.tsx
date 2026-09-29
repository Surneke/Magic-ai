import { Button, Icon, SectionHeading, sectionX } from "./ui";

const courses = [
  {
    chip: "FOUNDATIONS · 6 WEEKS",
    title: "Applied AI Engineering",
    description:
      "Build fluency across prompting, APIs, retrieval, evaluation, and responsible deployment.",
    meta: ["6 weeks", "18 lessons"],
    price: "From $690",
  },
  {
    chip: "SPECIALIZATION · 8 WEEKS",
    title: "LLM Systems in Production",
    description:
      "Design observable, efficient systems with RAG, agents, guardrails, and test-driven evaluation.",
    meta: ["8 weeks", "24 lessons"],
    price: "From $1,490",
    featured: true,
  },
  {
    chip: "PRODUCT · 6 WEEKS",
    title: "AI Product Builder",
    description:
      "Turn an AI opportunity into a validated product with strong UX, metrics, and operational rigor.",
    meta: ["6 weeks", "16 lessons"],
    price: "From $690",
  },
];

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  const featured = course.featured;
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-3xl border bg-surface ${
        featured ? "border-vip" : "border-line"
      }`}
    >
      <div
        className={`flex h-[200px] items-center justify-center bg-linear-to-r ${
          featured ? "from-[#3d2b0d] to-[#171233]" : "from-[#1c1640] to-[#0a2933]"
        }`}
      >
        <Icon name={featured ? "cover-star-vip" : "cover-star"} width={56} />
      </div>
      <div className="flex flex-1 flex-col items-start gap-4 p-6">
        <div
          className={`flex items-center gap-2 rounded-full border px-3 py-1.5 ${
            featured ? "border-vip" : "border-line-strong"
          }`}
        >
          <Icon name={featured ? "chip-dot-vip" : "chip-dot"} width={6} />
          <span
            className={`text-caption ${featured ? "text-vip" : "text-ink-2"}`}
          >
            {course.chip}
          </span>
        </div>
        <h3 className="text-h3 text-ink">{course.title}</h3>
        <p className="text-body-s text-ink-2">{course.description}</p>
        <div className="flex gap-4 text-caption text-ink-3">
          {course.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        <div className="mt-auto h-px w-full bg-line" />
        <div className="flex w-full items-center justify-between">
          <span className="text-h4 text-ink">{course.price}</span>
          <Button href="#enroll" variant="ghost">
            View path
          </Button>
        </div>
      </div>
    </article>
  );
}

export function LearningPaths() {
  return (
    <section
      id="paths"
      className={`flex scroll-mt-[82px] flex-col gap-14 py-20 lg:py-28 ${sectionX}`}
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          className="max-w-[720px]"
          eyebrow="Choose your route"
          title="Focused paths. Production-level depth."
          description="Each path combines concise lessons, live workshops, and a portfolio-ready build. Start where you are; leave with evidence of what you can do."
        />
        <a
          href="#paths"
          className="flex shrink-0 items-center gap-2.5 text-label-m text-ink hover:opacity-80"
        >
          Compare all paths
          <Icon name="arrow-up-right" width={16} />
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  );
}
