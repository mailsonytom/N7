function ContactUsButton({
    className = '',
    children = 'CONTACT US',
    ...props
}) {
    return (
        <button
            type="button"
            className="h-[49px] w-[210px] rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/60"

            {...props}
        >
            {children}
        </button>
    )
}

export default ContactUsButton
