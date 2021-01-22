/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Fachada from '../../img/fachada.png';

class QuienesSomos extends React.Component {
  render(){
    return (
      <div className="mt-5 container mb-5">
        <img className="d-block w-100 center card-circle" src={Fachada} />
      </div>
    )
  }
}
export default QuienesSomos









