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
      <img src={certificaciones} className="img-fluid pointer" alt="Responsive image" width='140px' />
    </form>
  </div>
</nav>
);
export default Header;