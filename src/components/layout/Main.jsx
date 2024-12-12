import { useTheme } from "../context/ThemeProvider";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { Header } from "./Header";
import { PageContainer } from "./PageContainer";

export const Main = ({children, chosenTopic}) => {

  const {theme} = useTheme();
  const deviceSize = useScreenWidth();

  return (

    <main className={`flex justify-center w-full min-h-screen p-4 bg-cover bg-no-repeat bg-light-grey dark:bg-dark-navy`} style={{backgroundImage: `url("images/pattern-background-${deviceSize}-${theme}.svg")`}}>
      <PageContainer className="flex flex-col">
        <Header chosenTopic={chosenTopic}/>
        {children}
      </PageContainer>
    </main>
  )
}