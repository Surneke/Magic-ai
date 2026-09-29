import type { Metadata } from "next"
import { Footer } from "../_components/footer"
import { Navbar } from "../_components/navbar"
import { SyllabusForm } from "../_components/syllabus-form"
import { Icon, sectionX } from "../_components/ui"

export const metadata: Metadata = {
  title: "Get started — Magic AI",
  description:
    "Join the next Magic AI cohort and get updates on new courses and lessons."
}

const benefits = [
  "14-day guarantee",
  "Split pay available",
  "Lifetime lesson access"
]

const updatesCopy =
  "Та шинээр нээгдсэн сургалт, хичээл энэ бүгдийн талаар цаг алдалгүй мэдээлэл авч баймаар байна уу?"

export default function GetStarted() {
  return (
    <>
      <Navbar />
      <main className='flex-1'>
        <section className={`flex flex-col gap-11 pt-18 pb-14 ${sectionX}`}>
          <div className='flex items-center gap-2.5'>
            <Icon name='live-indicator' width={7} />
            <span className='text-caption text-cyan'>ABOUT</span>
          </div>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <h1 className='text-[36px] leading-[1.06] font-medium tracking-[-0.9px] text-ink md:w-130 md:text-[46px] md:tracking-[-1.15px]'>
              GET STARTED
            </h1>
            <p className='text-body-m text-ink-2 md:w-[518px]'>
              Magic Code AI is an education and technology organization helping
              learners build practical skills in data, AI, programming, and
              modern IT.
            </p>
          </div>
          <div className='h-px w-full bg-line' />
        </section>
        <section
          className={`flex flex-col items-center gap-12 pt-12 pb-20 lg:flex-row lg:gap-18 lg:pb-[362px] ${sectionX}`}
        >
          <div className='flex min-w-0 flex-1 flex-col gap-5'>
            <span className='text-caption text-cyan'>
              Next cohort begins 19 October
            </span>
            <h2 className='text-[32px] leading-[1.08] font-medium tracking-[-0.8px] text-ink md:text-[46px] md:tracking-[-1.15px]'>
              Your first production-grade AI build starts here.
            </h2>
            <p className='text-body-s text-ink-2'>{updatesCopy}</p>
            <ul className='flex flex-wrap gap-x-6 gap-y-3'>
              {benefits.map(benefit => (
                <li key={benefit} className='flex items-center gap-2'>
                  <Icon name='check' width={14} />
                  <span className='text-caption text-ink-2'>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- responsive web deer haragdna ---- */}
          <div className='hidden md:block'>
            <SyllabusForm title='Мэдээлэл авах' description={updatesCopy} />
          </div>
        </section>

        {/* ---- responsive mobile deer ---- */}
        <div className='block md:hidden'>
          <SyllabusForm title='Мэдээлэл авах' description={updatesCopy} />
        </div>
      </main>
      <Footer />
    </>
  )
}
