/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import valores_farinter from '../../img/Valores Farinter.jpg';
import Lineamientos from '../../img/Lineamientos_1.jpg';
import desarrollo from '../../img/desarrollo.png';

class ValoresLineamientos extends React.Component {
  constructor(){
         super();
    }

 
    render(){
      return (
<div className="mt-5 container mb-5">
      <h2 className="text-primary text-center mb-2">Valores y lineamientos</h2>
      <img src={valores_farinter} className="d-block w-75 center"/>
      <div className="row mt-5">
        <div className="col-md-12">
          <img src={desarrollo} className="d-block w-100 center card-circle "/>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <img src={Lineamientos} className="d-block w-75 center card-circle"/>
        </div>
      </div>
    </div>
   )
  }
}export default ValoresLineamientos

