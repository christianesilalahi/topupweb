import { Col, Container, Row } from "react-bootstrap"

export const GameInformation = ({game="nama game", dev="developer", image}) => {
    return(<>
    {/* <div>
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
        </div> */}


    <div className="container d-flex align-items-center gap-2 thumbnail-container">
      
      {/* Thumbnail Section */}
        <div className="d-flex align-items-start gap-4">
            <div className="product-thumbnail-container position-relative" style={{ top: '-4rem' }}>
                <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="product-thumbnail-img z-20 mb-n4 rounded-2 shadow-lg"
                    src={image}
                    style={{
                    width: '130px',
                    height: '130px',
                    objectFit: 'cover'
                    }}
                />
                </div>
            </div>

            {/* Information Section */}
            <div className="py-4 py-sm-0">
                <h3>{game}</h3>
                <p>{dev}</p>
                <div className="d-flex flex-column flex-md-row gap-3 align-items-start text-md-start">
                    <span>⚡ Proses Cepat</span>
                    <span>💬 Layanan Chat 24/7</span>
                    <span>🌐 All Region</span>
                </div>
            </div>

            </div>



        <div>
      {/* Game Information Section */}
      {/* <Container className="game-info-section py-4" fluid style={{ backgroundColor: '#222' }}>
        <Row className="text-white align-items-center">
          <Col md={2} className="text-center">
            <img src={image} alt={game} className="img-fluid" style={{ borderRadius: '10px' }} />
          </Col>
          <Col md={10}>
            <h3>{game}</h3>
            <p>{dev}</p>
            <div className="d-flex flex-column flex-md-row gap-3 align-items-start text-md-start">
              <span>⚡ Proses Cepat</span>
              <span>💬 Layanan Chat 24/7</span>
              <span>🌐 All Region</span>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
    </>)
}