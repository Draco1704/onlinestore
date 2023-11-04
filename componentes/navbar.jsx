import './navbar.css';

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    
    <a className="navbar-brand" href="#">
    <img src={"/imagenes/logo.png"}alt="Bootstrap" width="40" height="40"></img>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Minis
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Nosotros
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Material
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}
export default Navbar;