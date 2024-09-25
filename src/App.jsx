import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Achievement } from "./components/Achievement";
import { Extra } from "./components/Extra";
import { Footer } from "./components/Footer";
// import {TestComponent} from "./components/TestComponent";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

import {GHN} from "./components/workpage/GHN";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/NguyenQuynhAnhThu"
          element={
            <div className="App">
              <NavBar />
              <Hero />
              <About />
              <Experience />
              <Container>
                <Row>
                  <Col xs={12} md={6} xl={4}>
                    <Work />
                  </Col>
                  <Col xs={12} md={6} xl={8}>
                    <Achievement />
                  </Col>
                </Row>
              </Container>
              <Extra />
              <Footer />
              {/* <TestComponent/> */}
            </div>
          }
        />
        <Route
          path="/NguyenQuynhAnhThu/GiaoHangNhanh"
          element={
            <div className="App">
              <GHN/>
              <Footer/>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
