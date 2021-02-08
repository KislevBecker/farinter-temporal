/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import logoazul from '../../img/LOGO FARINTER BLANCO.png';
import certificaciones from '../../img/LOGOS ISO.png'
import ModalCertificados from './ModalCertificados';

const Header = () => (

  <nav className="navbar  navbar-light bg-light">
    <ModalCertificados />
  <div className="collapse navbar-collapse container" id="navbarTogglerDemo01">
    <Link className="navbar-brand" to="/"><img src={logoazul} className="img-fluid mb-3" alt="Responsive image" width='140px'/></Link>
    <form className="form-inline my-2 my-lg-0">
      {/* <div className="input-group mt-2">
        <input type="text" className="form-control rounded-left-search"
          aria-label="Buscar por nombre del producto, sintoma, ingrediente activo o laboratorio."
          aria-describedby="basic-addon2" />
          <div className="input-group-btn">
            <a href="#" className="btn border rounded-right-search bg-white"> 
              <i className="fas fa-search mr-2"></i>
            </a>
          </div>
      </div> */}
      <img src={certificaciones} className="img-fluid pointer" alt="Responsive image" width='140px' />
    </form>
  </div>
</nav>
);
export default Header;