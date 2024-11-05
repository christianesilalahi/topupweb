import { Card } from "react-bootstrap"

export const ProductCard = ({product}) => {
    return(<>
        <Card className="h-100">
            <Card.Img variant="top" src={product.image} alt={product.name}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
        </Card>
    </>)
}