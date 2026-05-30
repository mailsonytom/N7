import showcaseItems from '../../data/showcaseItems'
import LightSectionCard from '../../components/FeatureLightSectionCard'
import ShowcaseRow from '../../components/ShowcaseRow'
import NewsTicker from "../../components/NewsTicker"
import LinkButton from '../../components/LinkButton'
import RequestDemoButton from '../../components/RequestDemoButton'

function LightSection() {
  return (
    <section className="relative left-1/2 mb-16 flex w-screen -translate-x-1/2 flex-col overflow-hidden bg-n7-offWhite">
      <p
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/3 select-none font-archivo text-[752.63px] font-medium leading-none text-n7-white "
        aria-hidden
      >
        N7
      </p>

      <div className="relative z-10">
        <NewsTicker />

        <div className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 py-16 lg:grid-cols-3">
          <div className="text-left flex flex-col gap-4">
            <span className="mb-4 text-3xl font-normal text-n7-dark lg:text-5xl">
              Digital banking <br /> out-of-the-box
            </span>
            <p className="mb-6 max-w-md text-base text-n7-dark/70">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <RequestDemoButton />
            <LinkButton className='w-[112px]' text="LEARN MORE" />
          </div>

          <div className="flex flex-col gap-10 col-span-2 px-16">
            <ShowcaseRow item={showcaseItems[0]} imageFirst />
            <ShowcaseRow item={showcaseItems[1]} imageFirst={false} />
            <ShowcaseRow item={showcaseItems[2]} imageFirst />
          </div>
        </div>

        <LightSectionCard />
      </div>
    </section>
  )
}

export default LightSection
