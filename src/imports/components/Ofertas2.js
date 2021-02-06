//import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ofertas2 = () => {
  const [data, setData] = useState([]);
  const [selectedPic, setSelectedPic] = useState("");
  const [loadingOfertas, setLoadingOfertas] = useState(true)

  useEffect(async () => {
      try {
          //const res = await axios.get("http://localhost:56673/api/TBL_IMAGENES_OFERTAS_WEBFARINTER")
          const res = await axios.post(`${process.env.REACT_APP_URL}/wsfarinter`);
          //console.log(res);
          setData (res.data);
      } catch (error) {
          console.log(error)
      }finally{
        setLoadingOfertas(false);
      }
  }, [axios, setData],
  );


  return (
    <>
    {
      loadingOfertas ? (
         <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
      ):(
<div>
      <h1 className="text-primary font-weight-bold">Magazine Farinter</h1>
      
     {data.map((item, i) => (
        <div key ={i} >
          <div className="gallery-wrapper">
            <div className="image-wrapper">
              <a href={item.id}>
                <img src={`data:image/jpeg;base64,${item.pic}`} id={item.id} alt="" />
              </a>
            </div>
          </div>
          <div className="gallery-lightboxes">
            <div className="image-lightbox" id={item.id}>
              <div className="image-lightbox-wrapper">
                <a href="#" className="close"></a>
                <a href={item.id} className="arrow-left"></a>
                <a href={item.id} className="arrow-right"></a>
                <img src={`data:image/jpeg;base64,${item.pic}`} id={item.id} alt="" />
              </div>
            </div>
          </div>
        </div>
     ))}
    </div>
      )
    }
    </>
    
  );
}
export default Ofertas2;