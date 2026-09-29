import Link from "next/link";
import { CourseCard } from "./course-card";
import { Icon, SectionHeading, sectionX } from "./ui";

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
        <Link
          href="/courses"
          className="flex shrink-0 items-center gap-2.5 text-label-m text-ink hover:opacity-80"
        >
          Compare all paths
          <Icon name="arrow-up-right" width={16} />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(({ price, ...course }) => (
          <CourseCard
            key={course.title}
            {...course}
            footer={price}
            action={{ label: "View path", href: "#enroll" }}
          />
        ))}
      </div>
    </section>
  );
}
