import ContactUsButton from "../../components/ContactUsButton"
import RequestDemoButton from "../../components/RequestDemoButton"

function CtaCard() {
  return (
    <section className="mb-16">
      <div
        className="relative w-[1279px] h-[427px] max-w-none overflow-hidden rounded-[27px] bg-gradient-to-r from-[#031E2A] to-[#000D12] px-12 py-14"
      >
        <p
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-archivo text-[500.63px] font-medium leading-none text-[#042430]"
          aria-hidden
        >
          CB7
        </p>

        <div className="relative z-10 grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="mb-8 text-3xl font-light text-n7-offWhite lg:text-5xl">
              Take the full advantage of going paper-less now.
            </span>

            <p className="max-w-lg text-base text-white/70 lg:max-w-none">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-end">
            <ContactUsButton />
            <RequestDemoButton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaCard
