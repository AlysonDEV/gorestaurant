import Logo from "../../assets/logo.svg"

import { Container } from "./style"

function Header() {
  return(
    <Container>
      <header>
        <img src={Logo} alt="Logo da empresa GoResturant" />
        <nav>
          <div>
            <button
              type="button"
              // onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                Icone
                {/* <FiPlusSquare size={24} /> */}
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}

export default Header