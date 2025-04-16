import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"; 

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="App">
      <div className="container text-center my-5">
        <h1 className="display-4">Welcome to BoinkGPT</h1>
        <p className="lead">Chat with us. Enter a message below:</p>

        <Button variant="primary" onClick={handleShow}>
          Start Chat
        </Button>

        {/* Modal for chat */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Chat with BoinkGPT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className="form-control"
              placeholder="Type a message..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Send</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default App;
