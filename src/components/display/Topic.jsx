
export const Topic = ({title, icon, onClick}) => {
  return (
    <div className="flex gap-4">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}