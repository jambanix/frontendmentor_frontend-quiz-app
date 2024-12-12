
export const Block = ({children, className, ...props}) => {

  return (
    <div className={`${className} text-heading-sm bg-pure-white dark:bg-navy rounded-2xl px-4 shadow-lg w-full cursor-pointer h-[64px] md:h-[70px] lg:h-[96px] flex items-center`} {...props}>
      {children}
    </div>
  )
}