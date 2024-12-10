
export const PageContainer = ({children, className}) => {
  return (
    <div className={`w-full max-w-[768px] lg:max-w-[1200px] flex flex-col gap-10 md:gap-14 lg:gap-20 ${className} p-4 items-center`}>
      {children}
    </div>
  )
}