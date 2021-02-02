/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Carrusel from '../components/Carrusel';
import FarinterHistoria from '../components/NuestraHistoria';
import CarruselProveedores from '../components/CarruselProveedoresFarma';
import CarruselConsumo from '../components/CarruselProveedoresConsumo';
// import Consumo from '../components/Consumo';
// import Farma from '../components/Farma';
// import CarruselOfertas from '../components/CarruselOfertas';
import Ofertas from '../components/Ofertas';


export default () => (
    <div className="mb-5">
        <Carrusel />
        <FarinterHistoria />
        <CarruselProveedores />
        <CarruselConsumo />
        {/* <Farma /> */}
        {/* <Consumo /> */}
        {/* <CarruselOfertas /> */}
        <Ofertas />
    </div>
);