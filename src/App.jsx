import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import {Work} from "./components/Work";
import {Footer} from "./components/Footer";
// import {TestComponent} from "./components/TestComponent";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="/NguyenQuynhAnhThu"
          element={
            <div className="App">
              <NavBar/>
              <Hero/>
              <About/>
              <Experience/>
              <Work/>
              <Footer/>
              {/* <TestComponent/> */}
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
