
export const Topic = ({title, icon}) => {

  const squareColour = () => {
    switch (title) {
      case "HTML":
        return "bg-square-orange";
      case "CSS":
        return "bg-square-green";
      case "JavaScript":
        return "bg-square-blue";
      case "Accessibility":
        return "bg-square-purple";
    }
  }
  return (
    <div className="flex gap-4 lg:gap-6 items-center">
      <div className={`${squareColour()} flex items-center justify-center p-1 rounded-lg shadow-sm`}>
        <img src={icon} alt={title} />
      </div>
      
      <h3 className="font-semibold text-navy dark:text-pure-white text-heading-sm">{title}</h3>
    </div>
  )
}