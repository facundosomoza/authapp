import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Swal from "sweetalert2";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const ModalRegister = ({ showModalRegister, handleHideRegister, app }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSaveChanges = () => {
    let valid = true;
    console.log("name", name.trim());
    if (name.trim() === "") {
      setMessage("You must fill out the field");
      valid = false;
    }
    if (email.trim() === "") {
      setMessage("You must fill out the field");
      valid = false;
    }
    if (password.trim() === "") {
      setMessage("you must fill out the field");
      valid = false;
    }
    if (valid) {
      registerUsers();
      handleHideRegister();
    }
  };

  const registerUsers = async () => {
    try {
      const auth = getAuth(app);

      console.log(auth, email, password);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire("You have registered succesfully");
    } catch (err) {
      Swal.fire("You have not registered succesfully");
    }
  };

  return (
    <>
      <Modal show={showModalRegister} onHide={handleHideRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register your User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" onChange={handleName} />
            {name.trim() ? "" : message}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={handleEmail} />
            {email.trim() ? "" : message}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handlePassword} />
            {password.trim() ? "" : message}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideRegister}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRegister;
