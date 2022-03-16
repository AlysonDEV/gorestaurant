import { BrowserRouter } from "react-router-dom"
import Way from "./routes"

import GlobalStyle from "./style/global"

function App() {
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Way />
      </BrowserRouter>
    </>
  )
}

export default App
