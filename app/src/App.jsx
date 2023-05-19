import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import MainContainer from "./components/MainContainer"

const theme = {
  colors: {
    //Primary
    moderateCyan: ' hsl(176, 50%, 47%)',
    darkCyan: 'hsl(176, 72%, 28%)',

    //Neutral
    black: 'hsl(0, 0%, 0%)',
    darkGray: 'hsl(0, 0%, 48%)'
  },

  desktop: '1440px'

}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App



