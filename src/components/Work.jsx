import React from "react";
import { Container } from "react-bootstrap";

import WorkCard from "./WorkCard";

import project3 from "../assets/img/work/work1.jpeg"

import project1Pdf from "../assets/img/work/project1.pdf"
import project2Pdf from "../assets/img/work/project2.pdf"
import project3Pdf from "../assets/img/work/workpage/aow1.mp4"

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
          <h2>Work</h2>
          <hr></hr>
        </div>
        <div style={styles.pin_container}>
          <WorkCard
            size="large"
            img={project3}
            text="Community Content Intern- GIAO HANG NHANH"
            pdfUrl={project3Pdf}
            textPara={[
              "+ Developed engaging social media content for GHN platforms including Tiktok and Community",
              "+ Contributed in executing several campaigns such as Giao Hang Nang, GHN birthday campaign, ... in term of communications",
            ]}
            detailsRoute="/NguyenQuynhAnhThu/GiaoHangNhanh"
          />
        </div>
      </Container>
    </section>
  );
};
