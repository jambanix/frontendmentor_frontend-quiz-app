
export const Block = ({children, onClick, className}) => {
  return (
    <div className={`bg-pure-white rounded-xl ${className} p-2`} onClick={onClick}>
      {children}
    </div>
  )
}