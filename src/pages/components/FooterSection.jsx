import {
  bankingLinks,
  socialLinks,
  solutionsLinks,
} from '../../data/footerLinks'
import FooterLinkList from '../../components/FooterLinkList'
import { addresses } from "../../data/addresses"

function FooterSection() {
  return (
    <section className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
      <div className="md:col-span-4">
        <span className="bg-gradient-to-br from-[#38BDF8] to-[#0B4B63] bg-clip-text font-archivo text-7xl font-medium leading-none text-transparent md:text-8xl lg:text-[300px]">
          N7
        </span>
      </div>
      <div className="flex flex-col justify-between gap-10 md:col-span-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-8 text-left">
            <div className='py-10'>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white">
                London
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{addresses.london1}</p>
            </div>
            <FooterLinkList heading="Solutions" links={solutionsLinks} />
          </div>

          <div className="flex flex-col gap-8 text-left">
            <div className='py-10'>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white">
                Dubai
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{addresses.dubai}</p>
            </div>
            <FooterLinkList heading="N7 Banking" links={bankingLinks} />
          </div>

          <div className="flex flex-col gap-8 text-left">
            <div className='py-10'>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white">
                London
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{addresses.london2}</p>
            </div>
            <FooterLinkList heading="Our socials" links={socialLinks} />
          </div>
        </div>

        <p className="text-left text-[14px] leading-relaxed text-white/50">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </section>
  )
}

export default FooterSection
