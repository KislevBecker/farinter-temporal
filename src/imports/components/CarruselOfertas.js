import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import pdf from '../../PDF/REVISTA FARINTER 99 V4.pdf';


const ImagesGallery = () => {
  const [images, setImages] = useState(null);

  const[data, setData] = useState([])
  const [selectedPic, setSelectedPic] = useState("");
  const [loadingOfertas, setLoadingOfertas] = useState(true)


  useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
    const res = await axios.get(
      //"https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
      `${process.env.REACT_APP_URL}/wsfarinter`
      //"http://172.16.2.127:8201/api/TBL_IMAGENES_OFERTAS_WEBFARINTER"
    );
    if (!shouldCancel && res.data && res.data.length > 0) {
      setImages(
        // res.data.map(url => ({
        //   original: `${url}`,
        //   thumbnail: `${url}`
        // }
        res.data.map(item => ({
          original: `${item.pic}`,
          thumbnail: `${item.pic}`
        }))
      );
    }
  };
    call();
    return () => (shouldCancel = true);
  }, []);

  return images ? <>      
  
  <div className="row">
    <div className="col-12">
      <h3 className="mt-3 mb-3 text-primary">Suplemento de ofertas: 1 de enero al 28 de febrero 2021 </h3>
    </div>
  </div>
  <ImageGallery items={images} />
  <div className="col-md-12 mt-2">
    <a className="font-weight-bold text-primary" href={pdf} download="Revista Farinter suplemento de ofertas.pdf">
      <div className="card">
        <div className="card-body text-center">
          Descargar Suplemento de ofertas
        </div>
      </div>
    </a>
  </div>
  </> : null;
};
export default ImagesGallery;
const rootElement = document.getElementById("root");
ReactDOM.render(<ImagesGallery />, rootElement);
