import RoundCheck from './RoundCheck'

function ShowcaseRow({ item, imageFirst }) {
  const image = (
    <img
      src={item.image}
      alt={item.heading}
      className="h-[542px] w-[268px] rounded-xl object-contain"
      aria-hidden
    />
  )

  const content = (
    <div className="flex h-full flex-col justify-center text-left gap-6">
      <h3 className="mb-2 text-base font-medium text-n7-dark">
        {item.heading}
      </h3>

      <p className="mb-4 text-base font-normal leading-relaxed text-n7-dark/70">
        {item.description}
      </p>

      <div className="flex flex-col gap-2.5">
        {item.points.map((point) => (
          <span key={point} className="flex items-start gap-2.5">
            <RoundCheck />
            <span className="text-base font-medium text-n7-dark/80">
              {point}
            </span>
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
      {imageFirst ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  )
}

export default ShowcaseRow
