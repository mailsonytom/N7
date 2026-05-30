function LinkButton({ text, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center uppercase gap-1 text-sm font-normal text-n7-blue border-b border-b-n7-blue transition-colors hover:text-white ${className}`}
    >
      {text}
      <span aria-hidden="true">&rarr;</span>
    </a>
  )
}

export default LinkButton