/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import codigo3 from '../../img/etica3.png';
import conducta from '../../img/shutterstock_1099307402.jpg';

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
      <h2 className="text-primary text-center mb-3">Código de ética y conducta</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-farinter card-circle">
          <div className="card-body">
          <h5 className="text-center text-uppercase font-weight-bold mb-2 text-white">mensaje del gerente general</h5><br />
          <p className="text-white text-justify">
        La misión de FARINTER es brindar a nuestros clientes el mejor servicio a traves del recurso humano altamente calificado, ofreciendo calidad total para convertirnos en el principal socio comercial de nuestras representadas.<br /><br />

Desde nuestros comienzos asumimos el compromiso de realizar las actividades de FARINTER enmarcadas en el respeto a las leyes, la confianza y la ética, siguiendo intuitivamente las normas de conducta, que hoy en dia nos han fortalecido con el respeto y confianza recíproca de nuestros clientes y proveesores en todo el mundo.<br /><br />

FARINTER mantiene el compromiso de tratar con honestidad y respeto a las autoridades gubernamentales, proveedores, clientes, el público en general y sus empleados. En consecuencia todos los empleados de farinter deben guiarse y someterse a lo dispuesto en el presente Código de Conducta y ética empresarial. Estamos convencidos de que es mejor para la empresa a largo plazo seguir una política de observancia de la legalidad y responsabilidad en todas sus actividades. De haber dudas acerca de la forma en que deben ponerse en práctica estas normas, se solicita a los empleados, ponerse en contacto con cualquier superior o con el departamento de recursos humanos.

      </p>             </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={codigo3}  className="card-img-top card-circle" style={{height:'95%'}} alt="..." />
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
    </div>
   )
  }
}export default CodigoEtica









