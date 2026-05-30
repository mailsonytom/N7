import LinkButton from './LinkButton'

function SolutionCard({ solution }) {
  return (
    <div className='my-4'>
      <img
        src={solution.logo}
        alt=""
        className="mb-4 h-10 w-10 object-contain"
        aria-hidden
      />
      <h3 className="mt-8 text-normal font-[22px] text-n7-offWhite">
        {solution.subHeading}
      </h3>
      <p className="mt-8 mb-6 text-base leading-relaxed text-white/60">
        {solution.description}
      </p>
      <LinkButton text="LEARN MORE" />
    </div>
  )
}

export default SolutionCard
