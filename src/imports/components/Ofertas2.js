/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import axios from 'axios';


const Ofertas2 = () => {

  const [data, setData] = useState([]);
  const [selectedPic, setSelectedPic] = useState("");
  const [loadingOfertas, setLoadingOfertas] = useState(true)
  const IMAGES = data.map(({url}) => ({
    original: url,
    thumbnail: url,
  })) 
  [{
          src: setSelectedPic(item.pic),
          thumbnail: `data:image/jpeg;base64,${item.pic}`,
          thumbnailWidth: 320,
          thumbnailHeight: 174,
  },
  ]


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
render(
        <Gallery images={IMAGES}/>,
        document.getElementById('example-0')
        );
      }
      export default Ofertas2;
      