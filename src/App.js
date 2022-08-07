import logo from './logo.svg';
import './App.css';
// import Header from './PracticeComponents/Header';
// import MainBody from './PracticeComponents/main';
import { Button, Col, Container, Form, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from './ProjectComponents/Header';
import Home from './ProjectComponents/Home';
import Course from './ProjectComponents/Course';
import AllCourses from './ProjectComponents/AllCourses';
import AddCourse from './ProjectComponents/AddCourse';
import UpdateCourse from './ProjectComponents/UpdateCourse';
import Menus from './ProjectComponents/Menus';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Component } from "react"
import 'react-app-polyfill/stable';
function App() {

  const message = () => {
    toast.success("Ok, Done!!", {
      position: "top-center"
    });
  }

  return (
    //     <div>
    //       <Header name={'Header One'} />
    //       <hr />
    //       <h1>this is my react js app</h1>
    //     <h2>this ish ho w it is </h2>
    //     <h1>react is awsome</h1>
    //     <hr />

    // <MainBody  />
    //     <hr />

    //     <Header name={'Header Two'}/>
    //     </div>


<BrowserRouter>
    <div>

      <Container>
        <Header />
        <Row>
          <Col md={4}>


                
                <Menus/>
                
          </Col>

          <Col md={8}>
            
            
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add-courses" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<AllCourses />} exact />
              </Routes>
            

          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
    </BrowserRouter>

  );
}

export default App;
