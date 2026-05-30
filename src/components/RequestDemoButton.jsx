function RequestDemoButton({
  className = '',
  children = 'REQUEST DEMO',
  ...props
}) {
  return (
    <button
      type="button"
      className={`h-[49px] w-[210px] rounded-lg bg-gradient-to-r from-[#00B4FD] to-[#003ACE] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export default RequestDemoButton
