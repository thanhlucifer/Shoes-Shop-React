import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';


const Modal = ({ content, setStateModal }) => {
  const handleClose = () => setStateModal(null);

  return (
    <BootstrapModal show={true} onHide={handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{content.name}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <img src={content.image} className="img-fluid mb-3" alt={content.name} />
        <h5>Description</h5>
        <p>{content.description}</p>
        <h5>Short Description</h5>
        <p>{content.shortDescription}</p>
        <h5>Price: ${content.price}</h5>
        <h5>Quantity: {content.quantity}</h5>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
