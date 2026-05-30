import DigitalBankIcon from "../../assets/DigitalBankIcon.png"

function InsightFeaturedCard({ insight }) {
  return (
    <article className="grid h-[288px] p-4 w-full max-w-[670px] grid-cols-2 overflow-hidden rounded-xl bg-n7-gray">
      <div className="p-4 bg-n7-navy m-4 rounded-xl flex items-center justify-center">
        <img src={DigitalBankIcon} alt="icon" />
      </div>
      <div className="flex flex-col p-6 py-8 text-left">
        <span className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#38BDF8]">
          {insight.category}
        </span>
        <h3 className="mb-3 text-[20px] font-light leading-snug text-white">
          {insight.heading}
        </h3>
        <span className="mb-auto text-xs text-white/50">{insight.meta}</span>
        <button
          type="button"
          className="h-[36px] w-[247px] rounded-lg border mt-6 text-center items-center border-n7-lightGray px-5 py-2.5 text-sm font-medium text-n7-lightGray transition-colors hover:border-white/60"

        >
          READ MORE
        </button>
      </div>
    </article>
  )
}

export default InsightFeaturedCard
