function FooterLinkList({ heading, links }) {
  return (
    <div className="text-left">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
        {heading}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => {
          const label = typeof link === 'string' ? link : link.label
          const href = typeof link === 'string' ? '#' : link.href

          return (
            <li key={label}>
              <a
                href={href}
                className="group flex items-center justify-between text-sm text-white/70 transition-colors hover:text-white"
              >
                <span>{label}</span>
                <span
                  className="text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                  aria-hidden
                >
                  →
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterLinkList
