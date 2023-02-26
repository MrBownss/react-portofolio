import CHome from "./CHome";
import { Container, Row, Col } from "react-bootstrap";

const CContact = () => {
  return (
    <div className="home min-vh-100">
      <Container>
        <Row>
          <CHome />
          <Col className="text-white m-5 pt-5">
            <div className="d-flex">
              <img className="img-logo" src="https://cdn.iconscout.com/icon/free/png-256/phone-1539-460197.png?f=avif&w=128" alt="Handphone" />
              <h3 className="ms-5 mt-2">: +62-822-7929-6332</h3>
            </div>
            <div className="mt-5 mb-5 d-flex">
              <img className="img-logo" src="https://cdn.iconscout.com/icon/free/png-256/whatsapp-69-432556.png?f=avif&w=128" alt="Whatsapp" />
              <h3 className="ms-5 mt-2">: https//wa.me/qr/44JJPOWTWWPCJ1</h3>
            </div>
            <div className="d-flex">
              <img className="img-logo" src="https://cdn.iconscout.com/icon/free/png-256/gmail-3521453-2944897.png?f=avif&w=128" alt="Gmail" />
              <h3 className="ms-5 mt-2">: ahmadtaufik4599@gmail.com</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CContact;
