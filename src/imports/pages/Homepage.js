/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Carrusel from '../components/Carrusel';
import FarinterHistoria from '../components/NuestraHistoria';
import CarruselProveedores from '../components/CarruselProveedoresFarma';
import CarruselConsumo from '../components/CarruselProveedoresConsumo';
import Consumo from '../components/Consumo';
import Farma from '../components/Farma';
import Ofertas from '../components/Ofertas';
import CertificadosIso from '../components/CertificadosIso';
//import ImagesGallery from '../components/CarruselOfertas';


export default () => (
    <div className="mb-5">
        <Carrusel />s
        <FarinterHistoria />
        <CarruselProveedores />
        <CarruselConsumo />
        <Farma />
        <Consumo />
        < CertificadosIso/>
        <Ofertas />
        {/* <ImagesGallery /> */}
    </div>
);