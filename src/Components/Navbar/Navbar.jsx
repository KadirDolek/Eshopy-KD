import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {




  return (
    <nav className="navbar navbar-expand-lg bg-body-transparent">
      <div className="container-fluid">
        <a className="navbar-brand"  style={{color:'white'}} href="#">Eshopy</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#articles">Nos articles</a>
            </li>
          </ul>
            <span style={{color:'white'}} className='d-flex'>
                Voir son panier? &nbsp; <button id='panier' className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><FontAwesomeIcon icon={faCartShopping} /></button>
            </span>
        </div>
      </div>
    </nav>
  );
}
