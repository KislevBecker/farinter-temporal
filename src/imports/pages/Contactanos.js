/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import skittles from '../../img/LOGO FARINTER BLANCO.png';


class Contactanos extends React.Component {
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
                  Contactanos
               </div>
             </div>
        )
    }
}export default Contactanos