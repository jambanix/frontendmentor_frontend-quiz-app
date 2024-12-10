
export const Topic = ({title, icon}) => {
  return (
    <div className="flex gap-4 items-center">
      <img src={icon} alt={title} />
      <h3 className="font-bold">{title}</h3>
    </div>
  )
}