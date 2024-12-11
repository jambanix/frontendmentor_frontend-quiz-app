
export const Welcome = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col">
        <h1 className="text-heading-l">Welcome to the</h1>
        <h1 className="text-heading-l font-semibold text-dark-navy">Frontend Quiz!</h1>
      </div>
     
      <p className="text-body-s italic text-grey-navy">Pick a subject to get started.</p>
    </section>
  )
}