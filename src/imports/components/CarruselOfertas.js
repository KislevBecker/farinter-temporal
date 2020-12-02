 /* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Bata from '../../img/Bata desechable hoja vendedora.jpg';
import Guantes from '../../img/Guantes latex hoja vendedora.jpg';
import Mascarilla from '../../img/Mascarilla KN95 hoja vendedora.jpg';
import Regulador from '../../img/Regilador de oxígeno hoja vendedora.jpg';
import Bata1 from '../../img/Bata desechable hoja vendedora2.jpg';
import Guantes1 from '../../img/Guantes latex hoja vendedora2.jpg';
import Mascarilla1 from '../../img/Mascarilla KN95 hoja vendedora2.jpg';
import Regulador1 from '../../img/Regilador de oxígeno hoja vendedora2.jpg';


export default () => (
<section className="pt-5 pb-5">
  <div className="container">
    <div className="row">
        <div className="col-6">
            <h3 className="mb-3 text-primary">Ofertas del día </h3>
        </div>
        
        <div className="col-12">
            <div id="carouselExampleIndicators4" className="carousel slide w-75 marginleft" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">

                            <div className="col-md-3 mb-3">
                                <div className="card pointer" data-toggle="modal" data-target="#bata">
                                    <img className="img-fluid" alt="100%x280" src={Bata1} />
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="card  pointer" data-toggle="modal" data-target="#guantes">
                                    <img className="img-fluid" alt="100%x280" src={Guantes1} />
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="card pointer" data-toggle="modal" data-target="#mascarilla">
                                    <img className="img-fluid" alt="100%x280" src={Mascarilla1} />
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="card pointer" data-toggle="modal" data-target="#regulador">
                                    <img className="img-fluid" alt="100%x280" src={Regulador1} />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
              <i className="fas fa-angle-left text-primary fa-2x"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
              <i className="fas fa-angle-right text-primary fa-2x"></i>
              <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>

 {/* <!-- Modal 1--> */}
 <div className="modal fade" id="bata" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content2">
      <div className="modal-body">
        <button type="button" className="close2 border-0" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i className="far fa-times-circle text-primary"></i></span>
        </button>
       <div className="row">
           <div className="col-md-12">
               <img src={Bata}  className="center img-fluid w-75" alt="..." />
           </div>
       </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal 2--> */}
<div className="modal fade" id="guantes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content2">
      <div className="modal-body">
        <button type="button" className="close2 border-0" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i className="far fa-times-circle text-primary"></i></span>
        </button>
       <div className="row">
           <div className="col-md-12">
               <img src={Guantes}  className="center img-fluid w-75" alt="..." />
           </div>
       </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal 3--> */}
<div className="modal fade" id="mascarilla" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content2">
      <div className="modal-body">
        <button type="button" className="close2 border-0" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i className="far fa-times-circle text-primary"></i></span>
        </button>
       <div className="row">
           <div className="col-md-12">
               <img src={Mascarilla}  className="center img-fluid w-75" alt="..." />
           </div>
       </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal 4--> */}
<div className="modal fade" id="regulador" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content2">
      <div className="modal-body">
        <button type="button" className="close2 border-0" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i className="far fa-times-circle text-primary"></i></span>
        </button>
       <div className="row">
           <div className="col-md-12">
               <img src={Regulador}  className="center img-fluid w-75" alt="..." />
           </div>
       </div>
      </div>
    </div>
  </div>
</div>

</section>
);

