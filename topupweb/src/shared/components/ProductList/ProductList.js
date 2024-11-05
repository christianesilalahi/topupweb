import { Col, Row } from "react-bootstrap"
import { ProductCard } from "../ProductCard/ProductCard"

export const ProductList = ({products}) => {
    return(<>
        <Row>
            {products.map((product) => (
                <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
                    <ProductCard product={product}/>
                </Col>
            ))}
        </Row>
    </>)
}