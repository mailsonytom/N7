import ScrollN7Icon from '@/assets/ScrollN7Icon.png'
import N7 from '@/assets/N7.png'
import WaveAnimation from '@/assets/WaveAnimation.png'
import CB7 from '@/assets/CB7.png'

const headlines = [
  { type: 'image', content: ScrollN7Icon, alt: 'N7 Icon' },
  { type: 'image', content: N7, alt: 'N7' },
  { type: 'text', content: 'Say' },
  { type: 'wave', content: WaveAnimation, alt: 'Wave' },
  { type: 'text', content: 'to the new way of banking' },
  { type: 'image', content: ScrollN7Icon, alt: 'N7 Icon' },
  { type: 'image', content: CB7, alt: 'CB7' },
]

function NewsTicker() {
  const items = [...headlines, ...headlines]

  return (
    <div
      className="h-[47px] w-full overflow-hidden bg-white"
      aria-label="News headlines"
    >
      <div className="flex h-full min-w-max items-center animate-marquee">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-4 px-8 text-dark"
          >
            {item.type === 'text' && (
              <span className="whitespace-nowrap text-2xl font-normal">
                {item.content}
              </span>
            )}

            {item.type === 'image' && (
              <img
                src={item.content}
                alt={item.alt}
                className="h-6 w-auto object-contain"
              />
            )}

            {item.type === 'wave' && (
              <img
                src={item.content}
                alt={item.alt}
                className="wave-hand h-6 w-auto object-contain"
              />
            )}

          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsTicker