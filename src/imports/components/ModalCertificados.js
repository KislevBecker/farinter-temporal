/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import pdf from '../../PDF/SCAN CERTIFICADO FARMACEUTICA INTERNACIONAL-2020-páginas-1.pdf';
import certificaciones1 from '../../img/pdf1.png';
import certificaciones3 from '../../img/pdf3.png';

  const ModalCertificados = () => {
    
  return (
    <div className="modal fade" id="certificacionesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content2">
          <div className="modal-body">
            <button type="button" className="close2 border-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i className="far fa-times-circle text-primary"></i></span>
            </button>
            <div className="row">            
              <div className="col-md-6 offset-md-3">
                <img src={certificaciones1} className="pointer center" width="100%" alt="Responsive image"/>
                <img src={certificaciones3} className="pointer center" width="100%" alt="Responsive image"/>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default ModalCertificados;





