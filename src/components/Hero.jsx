import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

import heroImg from "../assets/img/hero/heroImg2.png";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["a Marketer", "a Student", "a Freelancer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="textContainer">
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <p className="textRotate">
                      {`Hello, I'm a, `}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "a Marketer", "a Student", "a Freelancer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </p>
                    <h1 className="h1white">Nguyen Quynh</h1>
                    <h1 className="h1green">Anh Thu</h1>

                    <a
                      href="#work"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button className="workBtn btn">MY WORKS</button>
                    </a>
                    <a
                      href="#footer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button className=" contactBtn btn btn-outline-light">
                        CONTACT
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6} className="d-flex justify-content-center">
            <div className="bigImgContainer" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="smallImgContainer smallImgContainer1"></div>
              <div className="smallImgContainer smallImgContainer2"></div>
              <div className="smallImgContainer smallImgContainer3"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
