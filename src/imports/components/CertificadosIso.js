/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import certificaciones1 from '../../img/pdf1.png';
import certificaciones2 from '../../img/pdf2.png';
import pdf from '../../PDF/SCAN CERTIFICADO FARMACEUTICA INTERNACIONAL-2020.pdf';
import ModalCertificados from './ModalCertificados';
import ModalCertificados2 from './ModalCertificados2';

const CertificadosIso = () => (
  <div className="col-md-12 mt-2">
    <ModalCertificados />
    <ModalCertificados2 />
    <div className="row">
      <div className="col-12">
          <h3 className="mb-3 text-primary">Certificaciones ISO 9001:2015 </h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-sm-6 col-xs-6">    
        {/* <iframe src={pdf + '#toolbar=0&page=1'} width="100%" height="60px"/> */}
        <div className="card border-primary" data-toggle="modal" data-target="#certificacionesModal">
          <div className="card-body">
            <img src={certificaciones1} className="pointer" width="100%" height="500px" alt="Responsive image" data-toggle="modal" data-target="#certificacionesModal" />
          </div>
          <div className="card-footer mt-2 border-primary  bg-primary">
              <p className="text-center text-white"><b>Certificado: </b><br />
              SC-CER294157
              </p>  
            </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-6">    
        {/* <iframe src={pdf + '#toolbar=0&page=1'} width="100%" height="60px"/> */}
        <div className="card border-primary" data-toggle="modal" data-target="#certificacionesModal2">
          <div className="card-body">
            <img src={certificaciones2} className="pointer" width="100%" height="500px" alt="Responsive image" data-toggle="modal" data-target="#certificacionesModal2" />
          </div>
          <div className="card-footer mt-2 border-primary bg-primary">
              <p className="text-center text-white"><b>Certificado: </b><br />
              CO-SC-CER294157
              </p>  
            </div>
        </div>
      </div>
    </div>

    {/* <object data={pdf} width="100%" height="680px" scrollbar="0" toolbar= "0"/> */}
    {/* <img src={certificaciones} className="img-fluid pointer" alt="Responsive image" width='140px' data-toggle="modal" data-target="#certificacionesModal" /> */}
  </div>
);
export default CertificadosIso;
