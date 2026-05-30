import ContactUsButton from "../../components/ContactUsButton"
import RequestDemoButton from '../../components/RequestDemoButton'

function ContactUsSection() {
    return (
        <div className="relative z-10 pb-16">
            <div className="relative mx-auto flex h-[427px] w-full max-w-[1279px] items-center overflow-hidden rounded-[27px] bg-n7-dark ">
                <div className="relative z-10 grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="text-left">
                        <span className="mb-4 text-3xl font-normal leading-relaxed text-n7-offWhite lg:text-4xl">
                            Take the full advantage of <br /> going paper-less now.
                        </span>
                        <p className="max-w-lg text-base font-normal mt-8 leading-relaxed text-white/60">
                            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
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

export default ContactUsSection;
