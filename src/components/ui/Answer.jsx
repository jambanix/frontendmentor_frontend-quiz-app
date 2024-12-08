import { Block } from "../display/right/Block"; 

export const Answer = ({letter, text, onClick}) => {
  
  const handleClick = () => onClick(text);

  return (
    <Block onClick={handleClick}>
      <div className="flex gap-4">
        <div className="">{letter}</div>
        <div>{text}</div>
      </div>
    </Block>
  )
}