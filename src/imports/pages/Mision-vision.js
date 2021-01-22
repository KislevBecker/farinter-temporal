/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import MISION from '../../img/mision/MISIÓN.jpg';
import VISION from '../../img/mision/VISIÓN.jpg';
import COMPROMISO from '../../img/mision/COMPROMISO.jpg';

class MisionVision extends React.Component {
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
             <div className="mt-5 container">
                    <h2 className="text-primary text-center mb-3">Misión y visión</h2>
               <div className="row mt-2 mb-2">
                  <div className="col-md-6">
                  <img src={MISION}  className="d-block w-100 card-circle" alt="..." />
                  </div>
                  <div className="col-md-6">
                  <img src={VISION}  className="d-block w-100 card-circle" alt="..." />
                  </div>
               </div>
               <div className="row mt-3">
                    <div className="col-md-12">
                    <img src={COMPROMISO}  className="d-block w-100 card-circle" alt="..." />
                    </div>
               </div>
             </div>
        )
    }
}export default MisionVision