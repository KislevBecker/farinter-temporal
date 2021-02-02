/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Farinter from '../../img/Farinter.jpg';
import Lin from '../../img/Lineamientos.jpg';
import Bodegas from '../../img/Bodegas Farinter.jpg';

const Carrusel = () => (
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={Farinter} className="d-block w-100" alt="farinter" />
    </div>
    <div className="carousel-item">
    <img src={Lin} className="d-block w-100" alt="lineamientos" />
    </div>
    <div className="carousel-item">
    <img src={Bodegas} className="d-block w-100" alt="bodegas" />
    </div>
  </div>
</div>

);
export default Carrusel;