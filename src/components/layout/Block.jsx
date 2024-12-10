
export const Block = ({children, className, ...props}) => {
  return (
    <div className={`${className} bg-pure-white rounded-xl p-2 shadow-lg w-full cursor-pointer h-[64px] flex items-center`} {...props}>
      {children}
    </div>
  )
}