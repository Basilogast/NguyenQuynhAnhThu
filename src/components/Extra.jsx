import React from "react";
import { Container } from "react-bootstrap";

import WorkCard from "./WorkCard";

import project1 from "../assets/img/work/extra1.jpg"
import project2 from "../assets/img/work/extra2.jpg"
import project3 from "../assets/img/work/extra3.jpg"

import project1Pdf from "../assets/img/work/project1.pdf"
import project2Pdf from "../assets/img/work/project2.pdf"
import project3Pdf from "../assets/img/work/project3.pdf"

export const Extra = () => {
  const styles = {
    pin_container: {
      margin: "0 auto",
      padding: 0,
      width: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 350px)",
      gridAutoRows: "10px",
      // position: "absolute",
      // left: "50%",
      // transform: "translateX(-50%)",
      justifyContent: "center",
      backgroundColor: "#121212",
    },
  };
  return (
    <section className="work" id="work">
      <Container>
        <div className="d-flex flex-column align-items-center">
          <h2>Extracurricular activities</h2>
          <hr></hr>
        </div>
        <div style={styles.pin_container}>
          <WorkCard
            size="large"
            img={project1}
            text="OFFLINE K60+1"
            pdfUrl={project1Pdf}
            textPara={[
            ]}
            detailsRoute=""
          />
          <WorkCard
            size="large"
            img={project2}
            text="WORKSHOP “FLAT”"
            pdfUrl={project2Pdf}
            textPara={[
            ]}
            detailsRoute=""
          />
          <WorkCard
            size="large"
            img={project3}
            text="FACEBOOK GROUP"
            pdfUrl={project3Pdf}
            textPara={[
            ]}
            detailsRoute=""
          />
        </div>
      </Container>
    </section>
  );
};
