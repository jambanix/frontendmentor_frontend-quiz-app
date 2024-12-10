
import { Topic } from "../quiz/Topic"
import { ThemmeToggler } from "../ui/ThemeToggler"

export const Header = ({chosenTopic}) => {
  return (
    <header className="flex justify-between w-full text-2xl">
      {chosenTopic && <Topic {...chosenTopic}/> || <div></div>}
      <ThemmeToggler />
    </header>
  )
}