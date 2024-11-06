import { Col, Container, Row } from "react-bootstrap"

export const GameInformation = ({game="nama game", dev="developer", image}) => {
    return(<>
    <div>
            <Container className="game-info-section py-4" fluid style={{ backgroundColor: '#222' }}>
                <Row className="text-white align-items-center">
                    <Col md={2} className="text-center">
                        <img src={image} alt="Mobile Legends" className="img-fluid" style={{ borderRadius: '10px' }} />
                    </Col>
                    <Col md={10}>
                        <h3>{game}</h3>
                        <p>{dev}</p>
                        <div className="d-flex flex-column flex-md-row gap-3 align-items-left text-md-start">
                            <span>⚡ Proses Cepat</span>
                            <span>💬 Layanan Chat 24/7</span>
                            <span>🌐 All Region</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>)
}