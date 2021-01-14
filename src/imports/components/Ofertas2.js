/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

  const ModalOfertas = () => {

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



  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return (
<div>
        <button onClick={openModal}>Open Modal</button>
        {data.map((item, i) => (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <div className="row">
            
              <div className="col-md-12">
                <img src={`data:image/jpeg;base64,${item.pic}`} className="center img-fluid w-75" alt="..." />
              </div>
              
            </div>
        </Modal>
        ))} 
      </div>
  );
}
export default ModalOfertas;
