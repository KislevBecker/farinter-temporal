import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import ScrollToTop from 'react-router-scroll-top';

import Agregar from './imports/pages/Agregar';
import HomePage from './imports/pages/Homepage';
import Header from './imports/components/Header';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./imports/components/Navbar";
import Footer from './imports/components/Footer';
import Consumo from './imports/pages/Consumo';
import Unete from './imports/pages/Unete';
import QuienesSomos from './imports/pages/Quienes-somos';
import ValoresLineamientos from './imports/pages/Valores-lineamientos';
import CodigoEtica from './imports/pages/Codigo-etica';
import Contactanos from './imports/pages/Contactanos';
import RSEFundacionKielsa from './imports/pages/FundacionKielsa';
import Empresas from './imports/pages/Empresas';
// import AcercaNosotros from './imports/pages/Acerca-nosotros';
import MisionVision from './imports/pages/Mision-vision';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
        <Header />
        <Nav />
          <div className="container">
            <ScrollToTop>
              <Route exact path="/" component={HomePage} />
              <Route path="/Proveedores-Farma" component={Agregar} />
              <Route path="/Proveedores-Consumo" component={Consumo} />
              <Route path="/Unete-a-nosotros" component={Unete} />
              {/* <Route path="/Quienes-somos" component={QuienesSomos} /> */}
              <Route path="/Valores-y-lineamientos" component={ValoresLineamientos} />
              <Route path="/Codigo-de-etica" component={CodigoEtica} />
              <Route path="/Contactanos" component={Contactanos} />
              <Route path="/RSE-Fundacion-Kielsa" component={RSEFundacionKielsa} />
              <Route path="/Empresas" component={Empresas} />
              <Route path="/Acerca-de-nosotros" component={QuienesSomos} />
              <Route path="/Mision-y-vision" component={MisionVision} />
            </ScrollToTop>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;