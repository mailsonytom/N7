function ChevronDown({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronDown