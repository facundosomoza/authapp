import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Swal from "sweetalert2";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const ModalLogin = ({
  showModalLogin,
  handleHideLogin,
  handleLogout,
  handleLoginSuccess,
  app,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    let valid = true;

    console.log(email, password);

    if (email.trim() === "") {
      setMessage("You must fill out the message");
      valid = false;
    }
    if (password.trim() === "") {
      setMessage("You must fill out the message");
      valid = false;
    }

    console.log(valid);

    if (valid) {
      handleHideLogin();
      handleLogout();

      LoginUser();
    }
  };

  const LoginUser = async () => {
    try {
      const auth = getAuth(app);

      const res = await signInWithEmailAndPassword(auth, email, password);

      await Swal.fire("You have logged in succesfully");

      handleLoginSuccess(email);
    } catch (error) {
      Swal.fire("User or Password are not valid");
    }
  };

  return (
    <>
      <Modal show={showModalLogin} onHide={handleHideLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Log-in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <Button variant="secondary" onClick={handleHideLogin}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalLogin;
