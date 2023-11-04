import './footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Acerca de nosotros</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <p>
                © 2023 Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;