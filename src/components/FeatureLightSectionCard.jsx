import ContactUsButton from './ContactUsButton'
import RequestDemoButton from './RequestDemoButton'

function FeatureLightSectionCard() {
  return (
    <div className="relative z-10 pb-16">
      <div className="relative mx-auto flex h-[427px] w-full max-w-[1279px] items-center overflow-hidden rounded-[27px] bg-gradient-to-r from-[#031E2A] to-[#000D12] px-12">
        <p
          className="pointer-events-none absolute left-2/3 top-1/4 -translate-x-1/2 -translate-y-1/3 select-none font-archivo text-[552.63px] font-medium leading-none text-n7-dark "
          aria-hidden
        >
          N7
        </p>
        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="text-left">
            <span className="mb-4 text-3xl font-bold leading-tight text-white lg:text-4xl">
              Take the full advantage of <br /> going paper-less now.
            </span>
            <p className="max-w-lg text-base font-normal mt-8 leading-relaxed text-white/60">
              N7 helps your financial institution improve the client experience,<br /> automate and optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4" >
            <ContactUsButton />
            <RequestDemoButton />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeatureLightSectionCard;
