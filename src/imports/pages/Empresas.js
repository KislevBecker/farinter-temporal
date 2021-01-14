/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import skittles from '../../img/fachada.jpg';


class Empresas extends React.Component {
  constructor(){
         super();

         this.state = {
              black: false,
              black2: false,
              black3: false
         }
    }

 
    render(){
 
        return (

               <div className="caja">
                    {/* <img src={skittles} className= "d-block w-100 center" /> */}
                    <img className="d-block w-100 center" src={skittles} />
                    <div className="texto-2 p-4 text-justify">
                    Acerca de Nosotros <br />

Somos Farinter, una empresa hondureña de constante crecimiento y expansión regional. Con 50 años de experiencia, contamos con nueve empresas dedicadas a la fabricación, importación y comercialización de productos farmacéuticos, dermo-cosméticos y de consumo, que cumplen con los más altos estándares de calidad, apegados al cumplimiento de las normativas nacionales e internacionales para mejorar la salud y calidad de vida nuestros clientes. Estamos convencidos que el éxito de Farinter es el resultado del talento de nuestro capital humano. Por tal razón, trabajamos para crear un ambiente en el que los más de 3,500 colaboradores tengan la oportunidad de desarrollarse personal y profesionalmente.

                    </div>
               </div>
        )
    }
}export default Empresas