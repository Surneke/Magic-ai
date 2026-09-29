import { Icon, SectionHeading, sectionX } from "./ui"

const columns = [
  [
    {
      q: "Do I need a computer science background?",
      a: "No. You should be comfortable with basic Python or JavaScript, APIs, and learning by building. A short pre-course primer closes common gaps."
    },
    {
      q: "How much time should I plan each week?",
      a: "Most learners spend 6–8 hours: about 90 minutes of lessons, a live lab, project work, and one focused feedback cycle."
    },
    {
      q: "Are sessions live or self-paced?",
      a: "Both. Lessons are self-paced; labs, office hours, and project critiques run live and are recorded for your cohort."
    }
  ],
  [
    {
      q: "What do I finish with?",
      a: "A deployed AI system, evaluation report, architecture narrative, recorded demo, and verified credential for your portfolio."
    },
    {
      q: "Can my company sponsor me?",
      a: "Yes. We provide invoices, team bundles, manager progress summaries, and a concise learning-outcomes brief for L&D approval."
    },
    {
      q: "What if the cohort is not a fit?",
      a: "You can request a full refund within 14 days of the cohort start, provided you have completed less than 25% of the material."
    }
  ]
]

export function Faq() {
  return (
    <section className={`flex flex-col gap-14 py-20 lg:py-28 ${sectionX}`}>
      <SectionHeading
        className='max-w-[720px]'
        eyebrow='FAQ'
        title='Frequently Asked Questions.'
        description='Still deciding? These are the questions we hear most from thoughtful learners and their managers.'
      />
      <div className='grid gap-x-16 md:grid-cols-2'>
        {columns.map((items, i) => (
          <div key={i} className='flex flex-col'>
            {items.map(item => (
              <details
                key={item.q}
                open
                className='group border-b border-line py-[22px]'
              >
                <summary className='flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden'>
                  <span className='min-w-0 flex-1 text-h4 text-ink'>
                    {item.q}
                  </span>
                  <Icon
                    name='plus'
                    width={18}
                    className='transition-transform group-not-open:rotate-90'
                  />
                </summary>
                <p className='mt-3 text-body-s text-ink-2'>{item.a}</p>
              </details>
            ))}
          </div>
        ))}
      </div>
      <div className='flex flex-wrap items-center gap-2.5 text-[14px]'>
        <span className='text-body-s text-ink-2'>
          Have a different question?
        </span>
        <a
          href='mailto:hello@magicai.mn'
          className='text-label-m text-cyan hover:underline'
        >
          Talk to an advisor →
        </a>
      </div>
    </section>
  )
}
