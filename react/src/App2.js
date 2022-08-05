import React, { useEffect, useState } from "react";

import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import JsonMap from "./JsonMap";

import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { initializeApp } from "firebase/app";

const App2 = () => {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [logout, setLogout] = useState(false);

  const [user, setUser] = useState(null);

  const [info, setInfo] = useState([]);

  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzsM7w8Zt4mqzek7WFgArpGkcW3iZkCtM",
    authDomain: "fir-auth-ffda7.firebaseapp.com",
    projectId: "fir-auth-ffda7",
    storageBucket: "fir-auth-ffda7.appspot.com",
    messagingSenderId: "347416012238",
    appId: "1:347416012238:web:e68193928287d979bf379f",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function infoDataPlaceholder() {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        setInfo(data);
        console.log(data);
      });
  }

  const handleShowRegister = () => {
    setShowModalRegister(true);
  };

  const handleHideRegister = () => {
    setShowModalRegister(false);
  };

  const handleShowLogin = () => {
    setShowModalLogin(true);
  };

  const handleHideLogin = () => {
    setShowModalLogin(false);
  };

  const handleLogout = () => {
    setLogout(true);
    infoDataPlaceholder();
  };

  const handleLoginSuccess = (email) => {
    setUser(email);
  };

  const handleButtonLogout = () => {
    setUser(false);
  };

  const fullScreenHeight = {
    height: "100vh",
  };

  return (
    <>
      {user ? (
        <>
          <Row>
            <Col>
              <Button
                onClick={handleButtonLogout}
                className="mr-3 ml-2 mt-2 mb-2"
              >
                Logout
              </Button>
              {user}
              <JsonMap info={info}></JsonMap>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row
            style={fullScreenHeight}
            className="justify-content-center align-items-center"
          >
            <Col className="d-flex justify-content-center">
              <Button variant="outline-primary" onClick={handleShowRegister}>
                Register
              </Button>
              <Button
                variant="outline-success"
                className="ml-3"
                onClick={handleShowLogin}
              >
                Login
              </Button>
            </Col>
          </Row>
        </>
      )}

      <ModalRegister
        showModalRegister={showModalRegister}
        handleHideRegister={handleHideRegister}
        app={app}
      ></ModalRegister>

      <ModalLogin
        showModalLogin={showModalLogin}
        handleHideLogin={handleHideLogin}
        handleLogout={handleLogout}
        handleLoginSuccess={handleLoginSuccess}
        app={app}
      ></ModalLogin>
    </>
  );
};

export default App2;
