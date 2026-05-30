import RoundCheck from '../../components/RoundCheck'
import RequestDemoButton from '../../components/RequestDemoButton'
import LinkButton from '../../components/LinkButton'
import CloudBasedRight from "../../../assets/CloudBasedRight.png"
import Rectangle80 from "../../../assets/Rectangle80.png"
import MacBookGraph1 from "../../../assets/MacBookGraph1.png"
import benefits from "../../data/benefits"

function BenefitsSection() {
    return (
        <div>
            <section className="relative  my-20 overflow-hidden py-8">
                <p
                    className="pointer-events-none absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/3 select-none font-archivo text-[452.63px] font-medium leading-none text-[#0a1f28] "
                    aria-hidden
                >
                    CB7
                </p>

                <div className="z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2" style={{ transform: 'translateX(0)' }}>
                    <div className="text-left flex flex-col gap-4">
                        <span className="mb-2 text-[53px] font-normal text-n7-offWhite lg:text-[53px]" >
                            A complete cloud-based core banking.
                        </span>
                        <p className="mb-4 max-w-md text-base text-white/70">
                            Faster time to market with our cloud-based <br /> core banking services
                        </p>
                        <RequestDemoButton />
                        <LinkButton className='w-[112px]' text="LEARN MORE" />
                    </div>

                    <div className="text-nowrap mr-[-275px] w-[153%] pr-0 max-w-none whitespace-nowrap" >
                        <img src={CloudBasedRight} alt="img" className="max-w-none object-cover whitespace-nowrap" />
                        <img src={Rectangle80} alt="" width="800px" height="30px" />
                    </div>

                </div>
            </section>

            <section className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="text-nowrap ml-[-255px] w-[153%] pl-0 max-w-none whitespace-nowrap ">
                    <img src={MacBookGraph1} alt="img" className=" max-w-none object-cover whitespace-nowrap" />
                    <img src={Rectangle80} alt="" width="740px" height="30px" />
                </div>

                <div className="text-left">
                    <span className="mb-4 text-3xl font-normal text-white lg:text-3xl">
                        Run a more efficient, flexible,and digitally connected corebanking system
                    </span>
                    <p className="my-6 text-sm font-medium text-white/60">
                        what you will get:
                    </p>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            {benefits.colOne.map((point) => (
                                <span key={point} className="flex items-start gap-2.5">
                                    <RoundCheck />
                                    <span className="text-sm text-white/80">{point}</span>
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            {benefits.colTwo.map((point) => (
                                <span key={point} className="flex items-start gap-2.5">
                                    <RoundCheck />
                                    <span className="text-sm text-white/80">{point}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default BenefitsSection;