/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const CarruselOfertas = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            const res = await axios.get("http://localhost:56673/api/TBL_IMAGENES_OFERTAS_WEBFARINTER")
            console.log(res);
            setData (res.data);
        } catch (error) {
            console.log(error)
        }
    }, [axios, setData]);


    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-3 text-primary">Ofertas del día </h3>
                    </div>
                    <div className="col-12">
                        <div id="carouselExampleIndicators4" className="carousel slide w-75 marginleft" data-ride="carousel">

                            <div className="carousel-inner">
                                {data?.map?.length > 4 (
                                <div className="carousel-item active">
                                    
                                <div className="row">
                                {data.map((item, i) => (        
                                    <div className="col-md-3 mb-3" key={i}>
                                        <div className="card pointer" data-toggle="modal" data-target="#bata">
                                            <img className="img-fluid" alt="100%x280" src={`data:image/jpeg;base64,${item.pic}`} />
                                        </div>
                                    </div>                                     
                                ))}    
                                </div>
                                 
                            </div>

                                )
                                }
                                
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
                            {data.map((item, j) => ( 
                                <div className="col-md-12" key= {j}>
                                    <img className="img-fluid" alt="100%x280" src={`data:image/jpeg;base64,${item.pic}`} />
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default CarruselOfertas;

