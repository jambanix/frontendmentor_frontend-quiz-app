
export const Welcome = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl">Welcome to the</h1>
        <h1 className="text-5xl font-bold text-dark-navy">Frontend Quiz!</h1>
      </div>
     
      <p className="italic text-grey-navy">Pick a subject to get started.</p>
    </section>
  )
}