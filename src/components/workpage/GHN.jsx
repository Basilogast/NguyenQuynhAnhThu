import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WSPGallery from "./utility/WSPGallery";

import nangcover from "../../assets/img/work/workpage/nangcover.jpeg";
import nang1 from "../../assets/img/work/workpage/nang1.png";

import birthcover from "../../assets/img/work/workpage/birthcover.jpg";
import birth1 from "../../assets/img/work/workpage/birth1.jpg";
import birth2 from "../../assets/img/work/workpage/birth2.jpg";
import birth3 from "../../assets/img/work/workpage/birth3.jpg";
import birth4 from "../../assets/img/work/workpage/birth4.jpg";

import aowcover from "../../assets/img/work/workpage/aowcover.png";
import aow1 from "../../assets/img/work/workpage/aow1.mp4";
import aow2 from "../../assets/img/work/workpage/aow2.mp4";
import aow3 from "../../assets/img/work/workpage/aow3.mp4";
import aow4 from "../../assets/img/work/workpage/aow4.mp4";

export const GHN = () => {
  const galleryImages = [{ img: nang1 }];
  const galleryImages2 = [
    { img: birth1 },
    { img: birth2 },
    { img: birth3 },
    { img: birth4 },
  ];
  const galleryImages3 = [
    { img: aow1 },
    { img: aow2 },
    { img: aow3 },
    { img: aow4 },
  ];
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
          <p>
            + Execute the campaign across social platforms, emphasizing the
            service's key features to effectively engage shop owners, shippers,
            and buyers.
            <br />+ Develop content angles that are consistent with the strategy
            and tailored to the various stages of the overall media campaign
          </p>
          <WSPGallery galleryImages={galleryImages} />
        </div>

        <div>
          <h2>12th GHN Birthday campaign</h2>
          <Row>
            <Col xs={12} md={6} xl={4}>
              <img src={birthcover} />
            </Col>
            <Col xs={12} md={6} xl={8}>
              <h3>Giới thiệu Campaign</h3>
              <p></p>
            </Col>
          </Row>
          <h3>Illustrations</h3>
          <p></p>
          <WSPGallery galleryImages={galleryImages2} />
        </div>

        <div>
          <h2>AOW Content</h2>
          <Row>
            <Col xs={12} md={6} xl={4}>
              <img src={aowcover} />
            </Col>
            <Col xs={12} md={6} xl={8}>
              <a href="https://web.facebook.com/groups/tamsugiaohangcungGHN">
                <h3>Group Tâm sự giao hàng cùng GHN (Click here to view)</h3>
              </a>
              <p></p>
            </Col>
          </Row>
          <a href="https://www.tiktok.com/@tui_shipper_ne">
            <h3>Tiktok Channel: Tui Shipper ne (Click here to view)</h3>
          </a>
          <p></p>
          <WSPGallery galleryImages={galleryImages3} />
        </div>
      </Container>
    </section>
  );
};
