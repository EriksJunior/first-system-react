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
                <a className="nav-link " aria-current="page" href="/agenda">
                  Agenda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/suporte">
                  Suporte
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/telemarketing">
                  Telemarketing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/financeiro">
                  Financeiro
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/gerencia"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gerencia
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/dashboard">
                      DashBoards
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/relatorios">
                      Relatórios
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ganho">
                      Ganho
                    </a>
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
