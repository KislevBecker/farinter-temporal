/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import trabaja from '../../img/trabaja.png';
import integridad from '../../img/integridad.png';
import crecimiento from '../../img/crecimiento.png';
import liderazgo from '../../img/liderazgo.png';
import { ExternalLink } from 'react-external-link';
class Unete extends React.Component {
 
    render(){
 
        return (
    <div className="mt-5 container">
    <img src={trabaja} className="d-block w-100 card-circle"/>
    <div className="row mt-3">
      <div className="col-md-4">
      <img src={integridad} className="d-block w-100  card-circle"/>
      <div className="row container">
        <p className="text-secondary text-justify">
        Nuestra intención es mantener una relación duradera con nuestros clientes brindándoles un servicio del más alto nivel, con entregas rápidas, pedidos bien revisados y con seguimiento post venta por parte de nuestro personal.
        </p>
      </div>
      </div>
      <div className="col-md-4">
      <img src={crecimiento} className="d-block w-100  card-circle"/>
      <div className="row container">
        <p className="text-secondary text-justify">
        Trabajamos mejorando continuamente nuestros procesos, adoptamos un modelo de gestión de la calidad basada en la Norma Internacional ISO 9001, lo que nos permitirá ser cada día más eficientes, satisfaciendo las necesidades de nuestros clientes y proveedores. Enfocando a nuestro personal a un pensamiento basado en oportunidades y riesgos, con el fin de lograr la mejor eficacia y eficiencia de nuestros procesos. 
        </p>
      </div>
      </div>
      <div className="col-md-4">
      <img src={liderazgo} className="d-block w-100 card-circle"/>
      <div className="row container">
        <p className="text-secondary text-justify">
        Nuestra empresa está constituida por personal capacitado que desea servir de la manera más eficiente a nuestros clientes. Estamos dedicados al desarrollo del talento humano capacitándolo y orientándolo hacia la búsqueda permanente de la excelencia.  
        </p>
      </div>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12 mb-2 text-primary font-weight-bold">
                Compartenos tu hoja de vida a los correos:
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                <ExternalLink className="anchor" href="mailto:reclutamientotgu@farinter.hn?subject=Hoja de vida">
                  <div className="card bg-primary">
                    <p className="text-center"><b>Zona Centro Sur </b><br />
                    reclutamientotgu@farinter.hn
                    </p>
                  </div>
                </ExternalLink>
                </div>
                <div className="col-md-6">
                <ExternalLink className="anchor" href="mailto:reclutamientosps@farinter.hn?subject=Hoja de vida">
                  <div className="card bg-primary">
                    <p  className="text-center"><b>Zona Norte </b><br />
                    reclutamientosps@farinter.hn
                    </p>
                  </div>
                </ExternalLink>
                </div> 
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
)
}
}export default Unete
