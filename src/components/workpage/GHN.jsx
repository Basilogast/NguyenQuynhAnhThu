import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WSPGallery from "./utility/WSPGallery";

import nangcover from "../../assets/img/work/workpage/nangcover.jpeg";
import nang1 from "../../assets/img/work/workpage/nang1.png";

export const GHN = () => {
  const galleryImages = [{ img: nang1 }];
  return (
    <section className="workPage">
      <Container>
        <Link to="/NguyenQuynhAnhThu" className="btnHome">
          Return to Homepage
        </Link>
        <div>
          <h2>"Giao Hang Nang" campaign</h2>
          <Row>
            <Col xs={12} md={6} xl={4}>
              <img src={nangcover} />
            </Col>
            <Col xs={12} md={6} xl={8}>
              <h3>Giới thiệu Campaign</h3>
              <p></p>
            </Col>
          </Row>
          <h3>MAIN DUTIES:</h3>
          <p></p>
          <WSPGallery galleryImages={galleryImages} />
        </div>
      </Container>
    </section>
  );
};
