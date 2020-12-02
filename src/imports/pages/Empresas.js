/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import skittles from '../../img/LOGO FARINTER BLANCO.png';


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
             <div className="container">
               <div className="jumbotron">
                  Empresas
               </div>
             </div>
        )
    }
}export default Empresas