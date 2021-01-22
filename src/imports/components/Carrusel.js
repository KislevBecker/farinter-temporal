/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Farinter from '../../img/Farinter.jpg';
import Lin from '../../img/Lineamientos.jpg';
import Somos from '../../img/SOMOS Grupo Farinter.jpg';
import Valores from '../../img/Valores.jpg';
import Bodegas from '../../img/Bodegas Farinter.jpg';

const Carrusel = () => (

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <ol className="carousel-indicators mt-4">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> */}
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="5000">
      <img src={Farinter} className="d-block w-100 card-circle" alt="farinter" /> 
    </div>
    <div className="carousel-item" data-interval="5000">
      <img src={Lin} className="d-block w-100 card-circle" alt="lineamientos" />
    </div>
    {/* <div className="carousel-item" data-interval="5000">
      <img src={Somos} className="d-block w-100" alt="Somos" />
    </div>
    <div className="carousel-item" data-interval="5000">
      <img src={Valores} className="d-block w-100" alt="valores" />
    </div> */}
    <div className="carousel-item" data-interval="5000">
      <img src={Bodegas} className="d-block w-100 card-circle" alt="bodegas" />
    </div>
  </div>
  <a className="carousel-control-prev carrusel-izq" href="#carouselExampleFade" role="button" data-slide="prev">
    <i className="fas fa-angle-left text-primary fa-2x"></i>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next carrusel-der" href="#carouselExampleFade" role="button" data-slide="next">
    <i className="fas fa-angle-right text-primary fa-2x"></i>
    <span className="sr-only">Next</span>
  </a>
</div>

);
export default Carrusel;