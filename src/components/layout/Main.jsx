import { useTheme } from "../context/ThemeProvider";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Main = ({children}) => {

  const {theme} = useTheme();
  const deviceSize = useScreenWidth();

  return (
    <main className={`flex flex-col self-center min-h-screen w-full p-4 bg-cover bg-no-repeat max-w-[774px] lg:max-w-[1200px] bg-light-grey`} style={{backgroundImage: `url("images/pattern-background-${deviceSize}-${theme}.svg")`}}>
      {children}
    </main>
  )
}