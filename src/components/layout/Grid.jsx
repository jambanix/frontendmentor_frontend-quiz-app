
export const Grid = ({children}) => {
  return (
    <section className="w-full grid grid-cols-1 grid-rows-[30%_1fr] lg:grid-cols-2 lg:grid-rows-1 gap-10 lg:gap-20">
      {children}
    </section>
  )
}