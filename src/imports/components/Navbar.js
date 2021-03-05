import React, { useState } from 'react';
import {NavLink}  from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

const Navbar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <section className="container center">
      <NavLink exact  className="navbar-brand" to="/" activeclassName="main-nav-active">Inicio</NavLink>
      <button className="custom-toggler navbar-toggler" activeclassname="main-nav-active" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">    <ul className="navbar-nav">
       <li className="nav-item">
         <NavLink exact onClick={handleNavCollapse} className="nav-link text-farinter-size font-weight-bold" to="/Proveedores-Farma" activeClassName="main-nav-active">Farma</NavLink>
       </li>
       <li className="nav-item">
         <NavLink exact onClick={handleNavCollapse} className="nav-link text-farinter-size font-weight-bold" to="/Proveedores-Consumo" activeClassName="main-nav-active">Consumo</NavLink>
       </li>
       {/* <li className="nav-item">
         <NavLink exact onClick={handleNavCollapse} className="nav-link text-farinter-size font-weight-bold" to="/Empresas" activeClassName="main-nav-active">Empresas</NavLink>
       </li> */}
       {/* <li className="nav-item">
         <NavLink exact onClick={handleNavCollapse} className="nav-link text-farinter-size font-weight-bold" to="/Quienes-somos" activeClassName="main-nav-active">Quienes somos</NavLink>
       </li> */}
       {/* <li className="nav-item">
         <NavLink exact onClick={handleNavCollapse} className="nav-link text-farinter-size font-weight-bold" to="/Contactanos" activeClassName="main-nav-active">Contáctanos</NavLink>
       </li> */}
       <li className="nav-item">
         <NavLink exact onClick={handleNavCollapse} className="nav-link text-farinter-size font-weight-bold" to="/Unete-a-nosotros" activeClassName="main-nav-active">Únete a nosotros</NavLink>
       </li>
       <li className="nav-item">
         <NavLink onClick={handleNavCollapse} exact className="nav-link text-farinter-size font-weight-bold" to="/Valores-y-lineamientos" activeClassName="main-nav-active">Valores y lineamientos</NavLink>
       </li>
       <li className="nav-item">
         <NavLink exact onClick={handleNavCollapse} className="nav-link text-farinter-size font-weight-bold" to="/RSE-Fundacion-Kielsa" activeClassName="main-nav-active">RSE Fundación Kielsa</NavLink>
       </li>
       <li className="nav-item">
         <NavLink onClick={handleNavCollapse} exact className="nav-link text-farinter-size font-weight-bold" to="/Codigo-de-etica" activeClassName="main-nav-active">Código de Conducta y Ética</NavLink>
       </li>
       <li className="nav-item">
         <ExternalLink onClick={handleNavCollapse} exact className="nav-link text-farinter-size font-weight-bold" href="http://172.16.2.128:8667/" activeClassName="main-nav-active">Socios comerciales</ExternalLink>
       </li>
     </ul>
      </div>
      </section>
    </nav>
  );
}

export default Navbar;