
export const Block = ({children, className, ...props}) => {
  return (
    <div className={`${className} md:text-lg lg:text-xl bg-pure-white rounded-2xl px-4 shadow-lg w-full cursor-pointer h-[64px] md:h-[70px] lg:h-[96px] flex items-center`} {...props}>
      {children}
    </div>
  )
}