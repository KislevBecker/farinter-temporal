/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';

  const ModalOfertas = (props) => {
    
  return (
    <div className="modal fade" id="ofertasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content2">
          <div className="modal-body">
            <button type="button" className="close2 border-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i className="far fa-times-circle text-primary"></i></span>
            </button>
            <div className="row">            
              <div className="col-md-12">
                <img src={`data:image/jpeg;base64,${props.selectedPic}`} className="center img-fluid w-75" alt="imagen ofertas" />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default ModalOfertas;





