import AndreaPiacquadio from '../../../assets/AndreaPiacquadio.png'
import Balance from '../../../assets/Balance.png'
import RecentActivity from '../../../assets/RecentActivity.png'
import RequestDemoButton from '../../components/RequestDemoButton'
import trustedCompanies from '../../data/trustedCompanies'

function LandingView() {
    return (
        <section className="mb-16 mt-24 grid grid-cols-1 items-center gap-2 lg:grid-cols-2">
            <div className="text-left">
                <span className="text-[60px] text-n7-offWhite lg:text-[67px]">
                    The new foundation <br /> of modern banking
                </span>
                <p className="mt-8 max-w-md text-base font-normal text-white/70">
                    We drive innovation and growth, provide seamless <br /> customer
                    experience and operational excellence
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
                    <RequestDemoButton />
                    <button
                        type="button"
                        className="h-[49px] w-[210px] rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/60"
                    >
                        CONTACT US
                    </button>
                </div>

                <div className="mt-24 text-left">
                    <p className="mb-3 text-base font-medium uppercase tracking-wide text-white/50">
                        Trusted by
                    </p>
                    <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
                        {trustedCompanies.map((company) => (
                            <li
                                key={company.id}
                                className="flex items-center gap-1 text-xs font-thin text-white/60"
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-4 w-auto"
                                />
                                <span>{company.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="relative left-20 top-[-50px] justify-items-center">
                <img
                    src={AndreaPiacquadio}
                    alt="Product dashboard preview"
                    className="h-[300.71px] w-[362.64px] z-5 rounded-2xl object-cover"
                />
                <img
                    src={Balance}
                    alt="Balance"
                    className="absolute left-[380px] top-2 z-10 h-[177px] w-[208px] rounded-xl shadow-lg"
                />
                <img
                    src={RecentActivity}
                    alt="Recent activity"
                    className="absolute bottom-9 left-[-28px] z-10 h-[117px] w-[254px] rounded-xl bg-white object-cover shadow-lg"
                />
            </div>
            <div className="absolute z-0 top-32 right-20 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-[#00B4FD] to-[#003ACE] opacity-15 blur-2xl" />
        </section>
    )
}

export default LandingView
