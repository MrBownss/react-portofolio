import CHome from "../component/CHome";
import {Container, Row, Col} from 'react-bootstrap'

const Home = () => {
    return (
        <>
        

        <div className="home min-vh-100">
            <Container>
                <Row>
                    <CHome/>
                    <Col className="text-white text-center m-home">
                        <h6 className="fw-lighter">Hello</h6>
                        <h1 className="fw-bold mt-2 mb-5">I am Ahmad Taufik</h1>
                        <h4 className="fw-lighter">MERN DEVELOPMENT |</h4>
                    </Col>
                </Row>
            </Container>
        </div>
        
        </>
    
    )
}

export default Home;