
export const Block = ({children, onClick}) => {
  return (
    <div className="bg-pure-white rounded-xl" onClick={onClick}>
      {children}
    </div>
  )
}