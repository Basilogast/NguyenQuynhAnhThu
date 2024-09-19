import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import placeholder from "../assets/img/about/placeholder.png";
import img_1 from "../assets/img/about/1.png";
import img_2 from "../assets/img/about/2.jpg";
import img_3 from "../assets/img/about/3.jpg";
import img_4 from "../assets/img/about/4.jpg";
import img_5 from "../assets/img/about/5.jpg";

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 300px)",
    gridAutoRows: "10px",
    justifyContent: "center",
    backgroundColor: "#121212",
    maxHeight: "600px",
    overflowY: "scroll",
    position: "relative",
    scrollbarWidth: "none",
  },
  hideScrollbar: {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  },
  gradient_top: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100px",
    background:
      "linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))",
    pointerEvents: "none",
    zIndex: 1,
  },
  gradient_bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100px",
    background:
      "linear-gradient(to top, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))",
    pointerEvents: "none",
    zIndex: 1,
  },
  gradient_container: {
    position: "relative",
    overflow: "hidden",
  },
  education: {
    fontStyle: "italic",
    textAlign: "right",
    marginTop: "20px",
    fontSize: "14px",
    color: "#888", // Style as needed
  },
};

export const About = () => {
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (autoScrollEnabled) {
          if (
            container.scrollTop + container.clientHeight >=
            container.scrollHeight
          ) {
            container.scrollTop = 0;
          } else {
            container.scrollTop += 1;
          }
        }
      }, 50);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    if (container) {
      startAutoScroll();

      container.addEventListener("mouseenter", stopAutoScroll);
      container.addEventListener("mouseleave", startAutoScroll);

      return () => {
        clearInterval(scrollInterval);
        container.removeEventListener("mouseenter", stopAutoScroll);
        container.removeEventListener("mouseleave", startAutoScroll);
      };
    }
  }, [autoScrollEnabled]);

  useEffect(() => {
    const handleAnchorClick = (event) => {
      if (
        event.target.tagName === "A" &&
        event.target.getAttribute("href").startsWith("#")
      ) {
        setAutoScrollEnabled(false);
        setTimeout(() => setAutoScrollEnabled(true), 1000); // Re-enable after a delay
      }
    };

    window.addEventListener("click", handleAnchorClick);

    return () => window.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <section id="about" className="about">
      <Container>
        <Row className="d-flex">
          <Col xs={12} md={6} xl={5}>
            <div
              className="textContainer d-flex flex-column justify-content-between"
              style={{ height: "100%" }}
            >
              <div>
                <h2>About Me</h2>
                <p>
                  Hi! My name is Nguyen Quynh Anh Thu, a passionate and
                  open-minded student eager to kickstart my journey in the world
                  of marketing. It would be a great opportunity for me to bring
                  my energy, creativity, and academic foundation to your growing
                  team.
                </p>
              </div>
              <div style={styles.education}>
                <p>
                  FOREIGN TRADE UNIVERSITY
                  <br />
                  (2021 - 2025)
                  <br />
                  Major in Accounting and Auditing
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div style={styles.gradient_container}>
              <div style={styles.gradient_top}></div>
              <div
                style={{ ...styles.pin_container, ...styles.hideScrollbar }}
                ref={containerRef}
              >
                <AboutCard size="small" img={img_1} />
                <AboutCard size="medium" img={img_2} />
                <AboutCard size="large" img={img_3} />
                <AboutCard size="small" img={img_4} />
                <AboutCard size="medium" img={img_5} />
              </div>
              <div style={styles.gradient_bottom}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
