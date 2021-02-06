/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';

import SimpleModalSlideshow from 'react-simple-modal-slideshow';
  const ModalOfertas = (props) => {
    
  return (
    // <div className="modal fade" id="ofertasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //   <div className="modal-dialog modal-dialog-centered modal-lg">
    //     <div className="modal-content2">
    //       <div className="modal-body">
    //         <button type="button" className="close2 border-0" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true"><i className="far fa-times-circle text-primary"></i></span>
    //         </button>
    //         <div className="row">            
    //           <div className="col-md-12">
    //             <img src={`data:image/jpeg;base64,${props.selectedPic}`} className="center img-fluid w-100" alt="imagen ofertas" />
    //             {/* <CarruselOfertas /> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> 
    // </div>
<SimpleModalSlideshow
        slides={[{
          media: (
            <img src={`data:image/jpeg;base64,${props.selectedPic}`} className="center img-fluid w-100" alt="imagen ofertas" />
          ),
        }, {
          // media: (
          //   <img src="https://unsplash.it/600/400?image=1" />
          // ),
          // content: (
          //   <div>
          //     Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          //     Donec ullamcorper nulla non metus auctor fringilla.
          //     Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          //   </div>
          // ),
        }]}
        open={this.state.open}
        currentSlide={this.state.currentSlide}
        onClose={::this.handleClose}
        onNext={::this.handleNext}
        onPrev={::this.handlePrev}
      />


  );
}
export default ModalOfertas;





