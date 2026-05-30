import { useId } from 'react'

function RoundCheck() {
  const gradientId = useId()

  return (
    <svg
      width="13.14"
      height="13.14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-0.5 shrink-0"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="14"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00B4FD" />
          <stop offset="100%" stopColor="#003ACE" />
        </linearGradient>
      </defs>
      <circle cx="7" cy="7" r="7" fill={`url(#${gradientId})`} />
      <path
        d="M4.2 7.1L6.1 9L9.8 5.3"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RoundCheck
