import { Container, Row, Col, Form, Button } from "react-bootstrap";
import location from "../assets/img/footer/location.svg";
import mail from "../assets/img/footer/mail.svg";
import phone from "../assets/img/footer/phone.svg";
import footer1 from "../assets/img/footer/footer1.png";

export const Footer = () => {
  return (
    <section className="footer" id="footer">
      <Container>
        <Row className="d-flex justify-content-between">
          {/* Contact Form */}
          <Col xs={12} md={5} xl={5} className="contact-form-col">
            <h2 className="footer-heading-green">Keep In Touch</h2>
            <h2 className="footer-heading-white">With Me!</h2>
            <Form>
              <Form.Group controlId="messageInput" className="form-group">
                <Form.Label>Send me a message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type your message..."
                  className="textarea"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="send-message-button"
              >
                Send
              </Button>
            </Form>
          </Col>

          {/* Divider Line */}
          <Col xs={12} md={2} xl={2}>
            {/* <div className="imgplaceholder"></div> */}
            <div className="divider"></div>
          </Col>

          {/* Contact Information */}
          <Col xs={12} md={5} xl={5} className="contact-info-col d-flex">
            <div>
              <ContactInfoItem
                icon={location}
                title="Address"
                description="Binh Thanh District, HCMC, Viet Nam"
              />
              <ContactInfoItem
                icon={mail}
                title="Email"
                description="contact.quynhthu@gmail.com"
              />
              <ContactInfoItem
                icon={phone}
                title="Phone"
                description="0858456527"
              />
              <div
                className="imgplaceholder2"
                style={{
                  backgroundImage: `url(${footer1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Contact Info Item Component
const ContactInfoItem = ({ icon, title, description }) => (
  <div className="contact-info-item">
    <div className="icon-wrapper">
      <img src={icon} alt={title} className="icon" />
    </div>
    <div>
      <h3 className="contact-info-title">{title}</h3>
      <p className="contact-info-description">{description}</p>
    </div>
  </div>
);
