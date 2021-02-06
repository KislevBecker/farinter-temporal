import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const images = [{ source: `data:image/jpeg;base64,${props.selectedPic}` }];

const ModalOfertas = (props) => {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}