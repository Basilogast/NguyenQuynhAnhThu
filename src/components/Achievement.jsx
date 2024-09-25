import React from "react";
import { Container } from "react-bootstrap";

import WorkCard from "./WorkCard";

import project1 from "../assets/img/work/project1.png"
import project2 from "../assets/img/work/project2.png"
import project3 from "../assets/img/work/project3.png"

import project1Pdf from "../assets/img/work/project1.pdf"
import project2Pdf from "../assets/img/work/project2.pdf"
import project3Pdf from "../assets/img/work/project3.pdf"

export const Achievement = () => {
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
          <h2>Achievement</h2>
          <hr></hr>
        </div>
        <div style={styles.pin_container}>
          <WorkCard
            size="large"
            img={project2}
            text="Top 4 - IC Master 2024"
            pdfUrl={project2Pdf}
            textPara={[
              "+ Identified challenges and opportunities for ecotourism growth in Cuc Phuong National Park",
              "+ Developed a strategic approach to position Cuc Phuong National Park as a premier ecotourism destination.",
              "+ Designed and launched a new ecotourism product, tailored to the needs of adventure-seeking travelers.",
            ]}
            detailsRoute=""
          />
          <WorkCard
            size="large"
            img={project3}
            text="1st Runner-up - Digital Creatory 2024"
            pdfUrl={project3Pdf}
            textPara={[
              "+ Conducted research about marketplace, competitors, and customer insights for the RTD cocktail industry.",
              "+ Developed the strategic approach and campaign idea. ",
              "+ Developed a marketing plan to raise awareness and drive conversion for a new product of Chill Cocktail.",
              "+ Planned the budget strategy and set effective KPIs.",
            ]}
            detailsRoute=""
          />
        </div>
      </Container>
    </section>
  );
};
