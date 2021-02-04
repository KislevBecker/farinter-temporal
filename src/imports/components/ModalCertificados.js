/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import pdf from '../../PDF/SCAN CERTIFICADO FARMACEUTICA INTERNACIONAL-2020.pdf';


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
              <div className="col-md-12">
              <embed src={pdf} frameborder="0" width="100%" height="400px" />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default ModalCertificados;





