/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-grid-carousel';
import Spinner from 'react-bootstrap/Spinner';
import ModalOfertas from '../components/ModalOfertas';
import styled from 'styled-components';
import { ready } from 'jquery';

  const Ofertas = () => {

  const [data, setData] = useState([]);
  const [selectedPic, setSelectedPic] = useState("");


  useEffect(async () => {
      try {
        const res = await axios.get("http://172.16.2.128:8113/api/TBL_IMAGENES_OFERTAS_WEBFARINTER")
        //   const res = await axios.get("http://172.16.2.128:8113/api/TBL_IMAGENES_OFERTAS_WEBFARINTER/", 
        //   { headers: {
        //     Authorization: "Client-ID S4bzmlXtaBM7r_gDs6gVZDxsADGoS7jvMxbsfI7aueI",
        //   },
        // })
          console.log(res);
          setData (res.data);
      } catch (error) {
          console.log(error)
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
    <div className="container mt-2 pt-5">
      <ModalOfertas selectedPic={selectedPic}/>
      <div className="row">
            <div className="col-6">
                <h3 className="mb-3 text-primary">Ofertas del día </h3>
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
            {/* <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner> */}
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
    </div>

  );
}
export default Ofertas;
