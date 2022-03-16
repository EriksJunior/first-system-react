import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Grupo BMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="testeee" to={"/agenda"}>
                  Agenda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="testeee" to={"/cliente"}>
                  Cliente
                </Link>
              </li>
              <li className="nav-item">
                <Link className="testeee" to={"/suporte"}>
                  Suporte
                </Link>
              </li>
              <li className="nav-item">
                <Link className="testeee" to={"/telemarketing"}>
                  Telemarketing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="testeee" to={"/financeiro"}>
                  Financeiro
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/gerencia"}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gerencia
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to={"/dashboard"}>
                      DashBoards
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/relatorios"}>
                      Relatórios
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/ganho"}>
                      Ganho
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavComponent;
