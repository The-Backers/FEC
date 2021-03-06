import React from 'react';
import Modal from 'react-modal';
import Comparison from './Comparison.jsx';

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

Modal.setAppElement('#app');

const ComparisonModal = ({product, currentProduct}) => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <React.Fragment>
        <button onClick={openModal} className="comparison-modal" aria-label="Compare Product">&nbsp;</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className="modal-close">X</button>
          <Comparison product={product} currentProduct={currentProduct}/>
        </Modal>
      </React.Fragment>
    );
}

export default ComparisonModal;
