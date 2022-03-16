import { Route, Routes } from "react-router-dom";
import Produto from "../pages/Produto";
import Produtos from "../pages/Produtos";

function Way() {
    return (
        <Routes>
          <Route path="/" element={<Produtos/>} />
          <Route path="/Prod" element={<Produto />} />
        </Routes>
    )
}

export default Way