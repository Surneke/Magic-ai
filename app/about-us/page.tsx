import type { Metadata } from "next"
import Image from "next/image"
import { Footer } from "../_components/footer"
import { Navbar } from "../_components/navbar"
import { Icon, sectionX } from "../_components/ui"

export const metadata: Metadata = {
  title: "About us — MAGIC CODE AI",
  description:
    "MAGIC CODE AI is an education and technology organization helping learners build practical skills in data, AI, programming, and modern IT."
}

const disciplines = [
  { icon: "about-database", title: "Data", detail: "UNDERSTAND · MODEL" },
  {
    icon: "about-sparkles",
    title: "Artificial intelligence",
    detail: "APPLY · EVALUATE"
  },
  { icon: "code-2", title: "Programming", detail: "BUILD · ITERATE" },
  { icon: "about-network", title: "Modern IT", detail: "CONNECT · OPERATE" }
]

function FounderPhoto() {
  return (
    <div className='relative h-[360px] w-[318px] max-w-full shrink-0 overflow-hidden rounded-[10px] bg-[#090b10]'>
      <Image
        src='/bagsh.jpg'
        alt='Enkhtuya Tsogtbaatar, Founder & CEO of MAGIC CODE AI'
        fill
        sizes='318px'
        className='object-cover object-[65%_25%]'
      />
      <div className='absolute inset-0 bg-linear-to-t from-[#090b10] via-transparent to-[#090b10]/40' />
      <div className='absolute top-5 left-5 flex items-center gap-2 rounded-full bg-black/40 px-2.5 py-[7px] backdrop-blur'>
        <Icon name='status-dot' width={5} />
        <span className='text-caption text-ink-2'>MAGIC CODE AI</span>
      </div>
      <span className='absolute bottom-5 left-5 text-caption whitespace-nowrap text-ink-2'>
        LEADERSHIP / EDUCATION / TECHNOLOGY
      </span>
    </div>
  )
}

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className='flex-1'>
        <section className={`flex my-4 flex-col gap-11 pb-14 ${sectionX}`}>
          <div className='flex items-center gap-2.5'>
            <Icon name='live-indicator' width={7} />
            <span className='text-caption text-cyan'>ABOUT</span>
          </div>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <h1 className='text-[36px] leading-[1.06] font-medium tracking-[-0.9px] text-ink md:w-[520px] md:text-[46px] md:tracking-[-1.15px]'>
              ABOUT US
            </h1>
            <p className='text-body-m text-ink-2 md:w-[518px]'>
              MAGIC CODE AI is an education and technology organization helping
              learners build practical skills in data, AI, programming, and
              modern IT.
            </p>
          </div>
          <div className='h-px w-full bg-line' />
        </section>

        <section className={`flex flex-col gap-20 pt-4 pb-16 ${sectionX}`}>
          <article className='flex min-h-[286px] flex-col items-center gap-8 rounded-2xl border border-line-strong bg-canvas p-[18px] shadow-[0_20px_48px_rgba(0,0,0,0.24)] md:flex-row md:gap-[52px]'>
            <FounderPhoto />
            <div className='flex min-w-0 flex-1 flex-col gap-[18px]'>
              <span className='text-caption text-cyan'>FOUNDER &amp; CEO</span>
              <h2 className='text-h4 text-ink'>
                Enkhtuya Tsogtbaatar — Founder &amp; CEO of MAGIC CODE AI
              </h2>
              <div className='h-px w-12 bg-cyan' />
              <p className='max-w-[650px] text-body-s text-ink-2'>
                Enkhtuya Tsogtbaatar leads MAGIC CODE AI with a focus on
                technology education and learner-centered pathways. Her work
                brings practical skills, thoughtful guidance, and modern tools
                together for people preparing to grow in technology.
              </p>
            </div>
          </article>

          <div className='flex max-w-[440px] flex-col gap-6'>
            <div className='flex items-center gap-3'>
              <span className='text-caption text-ink-3'>01</span>
              <div className='h-px w-[30px] bg-line-strong' />
              <span className='text-caption text-cyan'>OUR MISSION</span>
            </div>
            <h2 className='text-h3 text-ink'>
              Learning that moves from knowledge to capability.
            </h2>
            <p className='text-body-s text-ink-2'>
              Our mission is to make career-relevant technology learning
              accessible, applied, and clear—so learners can move from
              understanding concepts to building with confidence. We develop
              future technology leaders through disciplined practice and
              real-world problem solving.
            </p>
          </div>

          <ul className='grid gap-3.5 sm:grid-cols-2'>
            {disciplines.map(item => (
              <li
                key={item.title}
                className='flex min-h-[126px] flex-col gap-[18px] rounded-[10px] border border-line-strong bg-surface p-[18px]'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex size-[34px] items-center justify-center rounded-md bg-cyan/10'>
                    <Icon name={item.icon} width={16} />
                  </div>
                  <Icon name='status-dot' width={5} />
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-label-m text-ink'>{item.title}</h3>
                  <span className='text-caption text-ink-3'>{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
