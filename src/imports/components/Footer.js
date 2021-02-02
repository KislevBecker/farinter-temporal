/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link, withRouter}  from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import CustomChatbot from './Chatbot';
import ChatDashboard from './miChatbot';


const date = new Date();
      const yyyy = date.getFullYear();
const Footer = () => (
<div className="footer bg-light">
  <section className="container pt-3">
    <div className="row">
    <div className="col-md-8">
      <h5 className="text-white text-uppercase font-weigth bold"> Oficinas principales</h5>
    <div className= "row">
      <div className="col-md-5 border-right">
        <p className="text-white"><b>Tegucigalpa, Honduras</b><br />
            Edificio Farinter, atrás de la Toyota, <br/>
            Barrio La Granja <br/> <br /><br/> <br />
            Teléfono PBX:             <ExternalLink className="anchor" href="tel:+50422252718">(+504) 2225-2718</ExternalLink><br /> <br />
            <div className= "row">
              <div className= "col-md-4">
              Whatsapp: <br />
              </div>
              <div className= "col-md-8">
                <ExternalLink className="anchor" href="https://api.whatsapp.com/send?phone=50499022395">(+504) 9902-2395 </ExternalLink><br />
                <ExternalLink className="anchor" href="https://api.whatsapp.com/send?phone=50495002706">(+504) 9500-2706</ExternalLink> <br />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                Televenta: <br />
              </div>
              <div className="col-md-8">
                <ExternalLink className="anchor" href="tel:+50422252724">(+504) 2225-2724</ExternalLink> <br />
                <ExternalLink className="anchor" href="tel:+50422252779">(+504) 2225-2779</ExternalLink> <br />
                <ExternalLink className="anchor" href="tel:+50422252723">(+504) 2225-2723</ExternalLink> <br />
              </div>
            </div>

            {/* FAX: (+504) 2225-2732 */}

        </p>
      </div>

      <div className="col-md-5">
        <p className="text-white">
          <b>San Pedro Sula, Honduras</b><br />
          Barrio Santa Rosa, segundo anillo periférico 7 y 8 calle SE. <br />
          Media cuadra al sur de la iglesia La Luz del Mundo <br/> <br />
          Teléfono PBX: <ExternalLink className="anchor" href="tel:+50425319400">(+504) 2531-9400</ExternalLink><br/> <br />

          <div className="row">
            <div className="col-md-4">
              Whatsapp: <br />
            </div>
            <div className="col-md-8">
            <ExternalLink className="anchor" href="https://api.whatsapp.com/send?phone=50496567501">(+504) 9656-7501</ExternalLink> <br />
            </div>
          </div>

        </p>
      </div>
    </div>
    </div>
    <div className="col-md-4">
      <div className="row">
        <div className="col-md-6">
        <h5 className="text-white text-uppercase font-weigth bold text-informacion"> Información</h5>
        <ul>
          <li>
            <Link to="/Acerca-de-nosotros" className="anchor">Acerca de nosotros</Link>
          </li>
          <li>
          <Link to="/Mision-y-vision" className="anchor">Misión y visión</Link>
          </li>
          <li>
          <Link to="/Valores-y-lineamientos" className="anchor">Valores</Link>
          </li>
        </ul>
        </div>
        <div className="col-md-6 mb-3">
          
        {/* <h5 className="text-white text-uppercase font-weigth bold text-informacion"> Síguenos</h5>
          <ExternalLink className="anchor" href="https://es-la.facebook.com/pages/category/Medical-Company/Grupo-Farinter-Recursos-Humanos-1420256331334635/"><i className="fab fa-facebook text-white"></i> Facebook </ExternalLink> */}
        <h5 className="text-white text-uppercase font-weigth bold text-informacion">Contáctanos</h5>
        <ExternalLink className="anchor" href="mailto:info@farinter.hn">info@farinter.hn</ExternalLink>
        </div>
      </div> 
    </div>
  </div>
    <div className="row">
    <CustomChatbot />
    {/* <ChatDashboard /> */}
      <div className="col-md-12">
        <p className="text-center text-white">
          Copyright © {yyyy} {' '} <b>Farmacéutica Internacional. Todos los Derechos Reservados.</b>
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p className="text-left text-white">
          V1.0.3
        </p>
      </div>
    </div>
  </section>
</div>
);
export default Footer;