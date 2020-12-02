/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Carrusel from '../components/Carrusel';
import FarinterHistoria from '../components/NuestraHistoria';
import CarruselProveedores from '../components/CarruselProveedoresFarma';
import CarruselConsumo from '../components/CarruselProveedoresConsumo';
import CarruselOfertas from '../components/CarruselOfertas';

export default () => (
    <div className="mb-5">
        <Carrusel />
        <FarinterHistoria />
        <CarruselProveedores />
        <CarruselConsumo />
        <CarruselOfertas />
    </div>
);