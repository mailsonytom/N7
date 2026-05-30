import caseStudies from '../../data/caseStudies'
import DigitalBankIcon from "@/assets/DigitalBankIcon.png"
import LinkButton from '../../components/LinkButton'

function CaseStudiesSection() {
  const activeIndex = 0
  const activeStudy = caseStudies[activeIndex]

  return (
    <section className="mb-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-white lg:text-4xl">
        Our Case Studies
      </h2>

      <article className="mx-auto grid h-[438px] w-[1015px] max-w-[1015px] grid-cols-2 overflow-hidden rounded-2xl bg-[#1a2a32]">
        <div className="p-4 bg-n7-navy m-4 rounded-xl flex items-center justify-center">
          <img src={DigitalBankIcon} alt="icon" />
        </div>
        <div className="flex flex-col justify-center p-8 text-left">
          <span className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#38BDF8]">
            {activeStudy.tag}
          </span>
          <h3 className="mb-6 max-w-sm text-4xl font-semibold leading-snug text-white">
            {activeStudy.title}
          </h3>
          <div className="mb-8 flex items-center gap-3">
            <img src={activeStudy.logo} alt="" />
            <span className="text-base font-medium text-white/80">
              {activeStudy.company}
            </span>
          </div>
          <button
            type="button"
            className="h-[36px] w-[431px] rounded-lg border mt-10 text-center items-center justify-between border-n7-lightGray px-5 py-2.5 text-sm font-medium text-n7-lightGray transition-colors hover:border-white/60"
          >
            READ MORE
          </button>
        </div>
      </article>



      <div className="mx-auto mt-8 flex max-w-[900px] items-center">
        <div className="flex flex-1 justify-center">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous case study"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/50"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full border border-white/50" />
              <span className="h-2.5 w-8 rounded-full border border-teal" />
              <span className="h-2.5 w-2.5 rounded-full border border-white/50" />
              <span className="h-2.5 w-2.5 rounded-full border border-white/50" />
            </div>

            <button
              type="button"
              aria-label="Next case study"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/50"
            >
              →
            </button>
          </div>
        </div>

        <LinkButton
          className="text-sm font-semibold tracking-wider"
          text="View All"
        />
      </div>
    </section >
  )
}

export default CaseStudiesSection
