import ChevronDown from "./ChevronDown"

const menuItems = ['Solutions', 'Resources']

function Topbar() {
  return (
    <header className="mx-[371.77px] mt-6">
      <nav
        className="grid h-[47px] w-[716.46px] grid-cols-3 items-center rounded-xl bg-[#2F2F2F] px-5"
        aria-label="Main navigation"
      >
        <span className="text-2xl font-semibold text-white">N7</span>

        <ul className="flex items-center justify-center gap-4">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href=""
                className="text-xs text-white/80 transition-colors hover:text-white flex "
              >
                {item}
                <ChevronDown className="h-4 w-4" />
              </a>
            </li>
          ))}
          <li>
            <a
              href=""
              className="text-xs text-white/80 transition-colors hover:text-white"
            >
              About us
            </a>
          </li>
        </ul>

        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-lg text-n7-offWhite border border-n7-offWhite w-[161px] px-3 py-1.5 text-xs font-medium transition-opacity hover:opacity-90"
          >
            REQUEST DEMO
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Topbar
