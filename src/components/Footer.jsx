import { Container, Row, Col, Form, Button } from "react-bootstrap";
import location from "../assets/img/footer/location.svg";
import mail from "../assets/img/footer/mail.svg";
import phone from "../assets/img/footer/phone.svg";

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
          <Col xs={12} md={3} xl={3}>
            <div className="imgplaceholder"></div>
          </Col>

          {/* Contact Information */}
          <Col xs={12} md={4} xl={4} className="contact-info-col d-flex">
            <div className="divider"></div>
            <div>
              <ContactInfoItem
                icon={location}
                title="Address"
                description="8 District, Ho Chi Minh City, Viet Nam"
              />
              <ContactInfoItem
                icon={mail}
                title="Email"
                description="annguyen20112003@gmail.com"
              />
              <ContactInfoItem
                icon={phone}
                title="Phone"
                description="0902784042"
              />
              <div className="imgplaceholder2"></div>
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
