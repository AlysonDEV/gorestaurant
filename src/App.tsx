import { BrowserRouter, Route, Routes } from "react-router-dom"

import Produto from "./pages/Produto"
import Produtos from "./pages/Produtos"
import GlobalStyle from "./style/global"

function App() {
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos/>} />
          <Route path="/Prod" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
