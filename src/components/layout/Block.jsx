
export const Block = ({children, onClick, className}) => {
  return (
    <div className={`${className || ""} bg-pure-white rounded-xl p-2`} onClick={onClick}>
      {children}
    </div>
  )
}