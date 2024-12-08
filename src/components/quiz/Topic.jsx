
export const Topic = ({title, icon}) => {
  return (
    <div className="flex gap-4 items-center">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}