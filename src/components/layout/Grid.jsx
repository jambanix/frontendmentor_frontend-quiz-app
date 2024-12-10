
export const Grid = ({children}) => {
  return (
    <section className="grid grid-cols-1 grid-rows-[30%_1fr] lg:grid-cols-2 lg:grid-rows-1 gap-6 lg:gap-10">
      {children}
    </section>
  )
}