/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-grid-carousel';
import ModalOfertas from '../components/ModalOfertas';
import styled from 'styled-components';
import pdf from '../../PDF/REVISTA FARINTER 99 V4.pdf';
import { ready } from 'jquery';

  const Ofertas = () => {

  const [data, setData] = useState([]);
  const [selectedPic, setSelectedPic] = useState("");
  const [loadingOfertas, setLoadingOfertas] = useState(true)

  useEffect(async () => {
      try {
          //const res = await axios.get("http://localhost:56673/api/TBL_IMAGENES_OFERTAS_WEBFARINTER")
          const res = await axios.post(`${process.env.REACT_APP_URL}/wsfarinter`);
          console.log(res);
          setData (res.data);
      } catch (error) {
          console.log(error)
      }finally{
        setLoadingOfertas(false);
      }
  }, [axios, setData],
  );

  const ArrowBtn = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: ${({ type }) => (type === 'right' ? '8px' : 'unset')};
  left: ${({ type }) => (type === 'left' ? '8px' : 'unset')};
  transform: ${({ type }) =>
    `translateY(-50%) rotate(${type === 'right' ? '45deg' : '-135deg'})`};
  width: 16px;
  height: 16px;
  cursor: pointer;
  border-top: 5px solid #5bc0de;
  border-right: 5px solid #5bc0de;
  opacity: 1;
  &:hover {
    border-color: #0275d8;
  }
`

  return (
    <>
      {
        loadingOfertas ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="container mt-2 pt-5">
          <ModalOfertas selectedPic={selectedPic}/>
          <div className="row">
                <div className="col-6">
                    <h3 className="mb-3 text-primary">Magazine Farinter </h3>
                </div>
            </div>
          <Carousel   
          cols={4} rows={1}  gap={10} loop  autoplay={5000}    
              className="pr-2 pl-2"
              indicators={false}
              fade
              arrowLeft={<ArrowBtn type="left" />}
            arrowRight={<ArrowBtn type="right" />}
              >
                {data.map((item, i) => (
                  <Carousel.Item key={i}>
                      <div className="col-md-3 col-sm-12 col-xs-12 mb-3 ml-2">
                        <div className="card pointer" data-toggle="modal" data-target="#ofertasModal" onClick={()=>setSelectedPic(item.pic)}>
                          <img width="200px" height="200px" alt="100%x280" src={`data:image/jpeg;base64,${item.pic}`} id={item.id} />
                        </div>
                      </div>                                     
                  </Carousel.Item>
                ))} 
            </Carousel>
            <div className="col-md-12 mt-2">
              <a className="font-weight-bold text-primary" href={pdf} download="Revista Farinter suplemento de ofertas.pdf">
                <div class="card">
                  <div class="card-body text-center">
                    Descarga aquí nuestro Suplemento de ofertas
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      }

    </>
  );
}
export default Ofertas;
