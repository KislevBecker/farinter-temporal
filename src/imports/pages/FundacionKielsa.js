/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
import ESR from '../../img/RSE/LOGO ESR.png';
import FUNDACIONKIELSA from '../../img/RSE/LOGO FUNDACIÓN KIELSA.png';
import LOGROS from '../../img/RSE/LOGROS FUNDACIÓN.jpg';

class FundacionKielsa extends React.Component {
    render(){ 
        return (
             <div className="container mt-3 mb-3">
               <div className="row">
                    <div className="col-md-8 col-sm-8 col-xs-8">
                         <h1 className="text-fundacionK center text-center">
                              Con tu ayuda combatimos la desnutrición infantil
                         </h1>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4">
                         <img src={FUNDACIONKIELSA}  className="text-left mitad" alt="..." />
                    </div>
               </div>
               <div className="row mt-3 mb-2">
                    <div className="col-md-12">
                         <h4 className="text-farinter text-justify pr-5 pl-5">Empresa Socialmente Responsable ganadora por 9&ordf; vez consecutiva del premio ESR gracias, al compromiso y participación en las diferentes obras benéficas y el combate de la desnutrición infantil en diferentes comunidades a nivel nacional.</h4>
                    </div>
               </div>
               <div className="row">
                    <div className="col-md-12">
                         <img src={LOGROS}  className="w-100 center card-circle" alt="..." />
                    </div>
               </div>

               <div className="row mt-2 mb-2">
                    <div className="col-12">
                         <div className="row p-3">
                              <span className="badge badge-pill bg-fundacionK"><h3 className="text-white text-nerko pl-2 pr-2">Búscanos en:</h3></span>
                         </div>
                    </div>
               </div>


 {/* // Solo visible para smarphones */}
<div className="d-block d-sm-block d-md-none">
<div className="row no-gutters">
  <div className="col-8">
       <div className="row">
          <div className="btn-group">
               <ExternalLink className="ancla text-farinter" href="http://fundacionkielsa.com/"> <span className="badge badge-dot"><span className="badge badge-blanco" >www</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fundacionkielsa.com</ExternalLink>
          </div>
       </div>
       <div className="row">
          <div className="btn-group">
          <ExternalLink className="ancla text-farinter" href="https://www.facebook.com/Fundacion-Kielsa-382451955197081/"><i className="fab fa-facebook text-farinter fa-2x"></i>&nbsp;Fundaciónkielsa</ExternalLink>
          </div>
       </div>

  </div>
  <div className="col-4">
    <div className="ml-5">

    <img src={ESR}  className="w-100 float-right" alt="..." />
    </div>
  </div>
</div>
</div>
 {/* // Fin Solo visible para smarphones */}
 {/* // Solo visible para pc */}
<div className="d-none d-sm-none d-md-block">
<div className="d-flex justify-content-end">

<div className="col-4">
       <div className="row mt-1">
          <div className="btn-group">
               <ExternalLink className="ancla text-farinter" href="http://fundacionkielsa.com/"> <span className="badge badge-dot"><span className="badge badge-blanco" >www</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fundacionkielsa.com</ExternalLink>
          </div>
       </div>
  </div>

  <div className="col-4">
          <div className="btn-group">
          <ExternalLink className="ancla text-farinter mb-1" href="https://www.facebook.com/Fundacion-Kielsa-382451955197081/"><i className="fab fa-facebook text-farinter fa-2x"></i>&nbsp;Fundaciónkielsa</ExternalLink>
          </div>

  </div>
  <div className="col-4">
    <div className="ml-5">

    <img src={ESR}  className="w-50 float-right" style={{position: 'relative', top: '-75px'}} alt="..." />
    </div>
  </div>
</div>

</div>
{/* // Fin solo visible para pc */}

             </div>
        )
    }
}export default FundacionKielsa