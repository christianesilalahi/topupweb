import { Card } from "react-bootstrap"
import './ProductCard.css'

export const ProductCard = ({product, navigation}) => {
    return(<>
    <div className="product-card" onClick={()=>navigation(product)}>
        <div className="product-card-container">
            <Card className="h-100 card-css">
                <Card.Img variant="top" src={product.image} alt={product.name}/>
                <Card.Body>
                    <Card.Title style={{ color: "white" }}>{product.name}</Card.Title>
                    <Card.Text style={{ color: "white" }}>{product.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
    </>)
}