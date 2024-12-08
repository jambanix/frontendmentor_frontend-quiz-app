import { useTheme } from "../context/ThemeProvider";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Main = ({children}) => {

  const {theme} = useTheme();
  const deviceSize = useScreenWidth();

  return (
    <main className={`flex flex-col items-center min-h-screen w-full p-4 bg-cover bg-no-repeat bg-${deviceSize}-${theme}`} style={{backgroundImage: `url("images/pattern-background-${deviceSize}-${theme}.svg")`}}>
      {children}
    </main>
  )
}