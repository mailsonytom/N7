import SolutionCard from '../../components/SolutionCard'
import solutions from '../../data/solutions'

function SolutionsView() {
  return (
    <section className="mt-32 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
      <div className="text-left">
        <span className="mb-6 text-4xl font-normal text-n7-offWhite lg:text-4xl">
          All of our solutions are <br /> tailor-made to your needs
        </span>
        <button
          type="button"
          className="mt-8 h-[49px] w-[226px] rounded-lg border border-n7-offWhite px-5 py-2.5 text-sm font-normal text-n7-offWhite transition-opacity hover:opacity-90"
        >
          Request demo
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </section>
  )
}

export default SolutionsView
