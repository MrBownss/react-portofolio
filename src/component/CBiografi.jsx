import CHome from "./CHome"
import {Container, Row, Col} from 'react-bootstrap'

const CBiografi = () => {

    return (
        
        <div className="home min-vh-100">
            <Container>
                <Row>
                    <CHome/>
                    <Col className=" text-white p-5 mt-5">
                        <div className="row justify-content-center d-flex">
                            <img className="col-12 col-md-5 col-sm-6 img" style={{width: "270px", height: "300px"}} src="../img/Gunung.jpg" alt="ahmad taufik" />

                            <p className="col-12 col-md-7 col-sm-6 pt-5 ms-5 mt-2">
                            <span className="fs-3 fw-bold">
                            Ahmad Taufik 
                            </span> <br />
                            Tinggal di kota Jakarta, lahir di Lampung pada tanggal 19 Juli 1999. Memiliki pengalaman bekerja di hospitality selama 4 tahun sebagai housekeping di berbagai hotel berbintang dan sekarang bekerja sebagai housekeeping di O'BA resort di kepulauan seribu. Memiliki hobi yang berhubungan dengan alam yaitu mendaki gunung. Gunung yang sudah didaki yaitu gunung lawu, gunung prau dan gunung gede.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
    
}

export default CBiografi