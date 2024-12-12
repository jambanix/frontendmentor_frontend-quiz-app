
export const Welcome = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col">
        <h1 className="text-heading-l text-dark-navy dark:text-pure-white">Welcome to the</h1>
        <h1 className="text-heading-l font-semibold text-dark-navy dark:text-pure-white">Frontend Quiz!</h1>
      </div>
     
      <p className="text-body-s italic text-grey-navy dark:text-light-bluish">Pick a subject to get started.</p>
    </section>
  )
}