
export const Block = ({children, onClick, className}) => {
  return (
    <div className={`bg-pure-white rounded-xl ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}