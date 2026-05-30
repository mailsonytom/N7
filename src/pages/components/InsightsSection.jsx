import { featuredInsight, insightCards } from '../../data/insights'
import InsightFeaturedCard from '../../components/InsightFeaturedCard'
import InsightSmallCard from '../../components/InsightSmallCard'
import LinkButton from '../../components/LinkButton'

function InsightsSection() {
  return (
    <section className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 ">
      <div className="relative text-left flex flex-col gap-8">
        <p className="mb-6 max-w-md text-3xl font-normal leading-tight text-n7-offWhite lg:text-4xl">
          Get yourself up-to-speed on all the things happening in fintech
        </p>
        <button
          type="button"
          className="rounded-md w-[190px] h-[49px] border border-n7-offWhite/40 px-6 py-2.5 text-base font-normal uppercase tracking-wider text-white transition-colors hover:border-white/70"
        >
          INSIGHTS
        </button>
        <div className="absolute top-44 left-20 h-60 w-60 rounded-full bg-gradient-to-r from-[#00B4FD] to-[#003ACE] opacity-20 blur-3xl" />

      </div>

      <div className="flex flex-col gap-6">
        <InsightFeaturedCard insight={featuredInsight} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {insightCards.map((insight) => (
            <InsightSmallCard key={insight.id} insight={insight} />
          ))}
        </div>

        <LinkButton
          className="self-end text-sm font-semibold tracking-wider"
          text="Read all insights" />
      </div>
    </section >
  )
}

export default InsightsSection
