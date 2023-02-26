import {Navbar, Container, Nav} from "react-bootstrap"

const CHome = () => {
    return (
        <>
        <Navbar bg="transparent" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <h2 className="dark fw-bold">MrBownss</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="fw-bold ms-5">Home</Nav.Link>
                        <Nav.Link href="/biografi" className="fw-bold ms-5">BIografi</Nav.Link>
                        <Nav.Link href="/contact" className="fw-bold ms-5">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CHome;