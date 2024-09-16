import React from "react";
import { Container } from "react-bootstrap";

import WorkCard from "./WorkCard";

import project1 from "../assets/img/work/project1.png"
import project2 from "../assets/img/work/project2.png"
import project3 from "../assets/img/work/project3.png"

import project1Pdf from "../assets/img/work/project1.pdf"
import project2Pdf from "../assets/img/work/project2.pdf"
import project3Pdf from "../assets/img/work/project3.pdf"

export const Work = () => {
  const styles = {
    pin_container: {
      margin: "0 auto",
      padding: 0,
      width: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 400px)",
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
          <h2>My Projects</h2>
          <hr></hr>
        </div>
        <div style={styles.pin_container}>
          <WorkCard
            size="large"
            img={project1}
            text="External Project "
            pdfUrl={project1Pdf}
            textPara={[
              "+ Book and manage KOL",
              "+ Keep track and monitor project progress",
              "+ Ensure timeline for product air schedules",
              "+ Ensure KOC's product quality meets the requirements from LYN client brief",
              "+ Make sure KOL's posts meet up to KPI commitment and report KOL booking campaign",
            ]}
            detailsRoute=""
          />
          <WorkCard
            size="large"
            img={project2}
            text="Top 4 - IC Master 2024"
            pdfUrl={project2Pdf}
            textPara={[
              "+ Book and manage KOL",
              "+ Keep track and monitor project progress",
              "+ Ensure timeline for product air schedules",
              "+ Ensure KOC's product quality meets the requirements from LYN client brief",
              "+ Make sure KOL's posts meet up to KPI commitment and report KOL booking campaign",
            ]}
            detailsRoute=""
          />
          <WorkCard
            size="large"
            img={project3}
            text="1st Runner-up - Digital Creatory 2024"
            pdfUrl={project3Pdf}
            textPara={[
              "+ Book and manage KOL",
              "+ Keep track and monitor project progress",
              "+ Ensure timeline for product air schedules",
              "+ Ensure KOC's product quality meets the requirements from LYN client brief",
              "+ Make sure KOL's posts meet up to KPI commitment and report KOL booking campaign",
            ]}
            detailsRoute=""
          />
        </div>
      </Container>
    </section>
  );
};
