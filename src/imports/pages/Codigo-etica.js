/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import codigo3 from '../../img/etica3.png';
import conducta from '../../img/shutterstock_1099307402.jpg';
import pdf from '../../PDF/Código-de-Conducta-y-Ética-ATT15-(Firmado).pdf';

class CodigoEtica extends React.Component {
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
    <div className="mt-5 container mb-5">
      <h2 className="text-primary text-center mb-3">Código de Conducta y Ética</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-farinter card-circle">
          <div className="card-body">
          <h5 className="text-center text-uppercase font-weight-bold mb-2 text-white">mensaje del gerente general</h5><br />
          <p className="text-white text-justify">
          La misión de FARINTER es brindar a nuestros clientes el mejor servicio a través del recurso humano altamente calificado, ofreciendo calidad total para convertirnos en el principal socio comercial de nuestras representadas.<br /><br />

Desde nuestros comienzos asumimos el compromiso de realizar las actividades de FARINTER enmarcadas en el respeto a las leyes, la confianza y la ética, siguiendo intuitivamente normas de conducta, que hoy en día nos han fortalecido con el respeto y confianza recíproca de nuestros clientes y proveedores en todo el mundo.<br /><br />

FARINTER mantiene el compromiso de tratar con honestidad y respeto a las autoridades gubernamentales, proveedores, clientes, el público en general y sus empleados.<br /><br />

En consecuencia, todos los empleados de FARINTER deben guiarse y someterse a lo dispuesto en el presente Código de Conducta y Ética Empresarial.<br /><br />

Estamos convencidos de que es mejor para la empresa a largo plazo seguir una política de observancia de la legalidad y responsabilidad en todas sus actividades.<br /><br />

De haber dudas acerca de la forma en que deben Ponerse en práctica estas Normas, se solicita a los Empleados, ponerse en contacto con su superior o con el Departamento de Recursos Humanos.


      </p>             </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={codigo3}  className="card-img-top card-circle" style={{height:'100%'}} alt="..." />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <img src={conducta}  className="card-img-top card-circle" style={{height:'100%'}} alt="..." />
        </div>
        <div className="col-md-6">
        <h4 className="text-center text-uppercase text-primary font-weight-bold mt-5">Código de conducta</h4><br />
          <h5 className="text-justify text-primary">
          El código de conducta refleja el objetivo de la dirección de reforzar los estandares éticos de aplicación en toda la empresa, así como de fomentar un ambiente de trabajo en el que se promueva a la integridad, el respeto y la equidad.
          </h5>

        </div>
      </div>
      <div className="col-md-12 mt-2">
        <a className="font-weight-bold text-primary" href={pdf} download="Código de conducta y ética.pdf">
          <div class="card">
            <div class="card-body text-center">
              Descarga aquí nuestro Código de Conducta y Ética
            </div>
          </div>
        </a>
      </div>
    </div>
   )
  }
}export default CodigoEtica









