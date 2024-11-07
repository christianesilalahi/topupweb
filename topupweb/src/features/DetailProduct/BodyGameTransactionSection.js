import { Container, Row } from "react-bootstrap"
import { HowToTopUp } from "./BodyGameComponents/HowToTopUp"

export const BodyGameTransactionSection = () => {
    return(<>
        <div>
            <Container className="transaction-section py-4" fluid>
                <Row>
                    <HowToTopUp/>
                </Row>

                
            </Container>


        </div>
    </>)
}