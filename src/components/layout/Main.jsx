import { useScreenWidth } from "../hooks/useScreenWidth";

export const Main = ({children}) => {

  const deviceSize = useScreenWidth();
  const backgroundImageClass = `background-${deviceSize}-light`;

  return (
    <main className={`flex flex-col items-center min-h-screen w-full p-4 bg-${backgroundImageClass}`}>
      {children}
    </main>
  )
}