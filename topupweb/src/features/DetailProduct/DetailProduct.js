import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import logo from "../../logo.svg"
import { GameInformation } from "./GameInformation"
import { HowToTopUp } from "./HowToTopUp"

export const DetailProduct = () => {
    //const {productID} = useParams()
    // const [product, setProduct] = useState(null)

    let product = {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        image: logo,
    }


    // useEffect(()=>{
    //     const fetchProduct = async() => {
    //         try{
    //             const response = await fetch(`/api/products/${productID}`)
    //             const data = await response.json()
    //             setProduct(data)
    //         } catch (e) {
    //             console.error('Error fetching product: ', e)
    //         }
    //     }

    //     fetchProduct();
    // }, productID)

    // if (!product) {
    //     return(<>
    //         <div>Loading...</div>
    //     </>)
    // }

    return(<>
    <div>

        {/* banner */}
        <div className="banner-section text-white text-center py-5" style={{ backgroundColor: '#000', backgroundImage: 'url("path-to-banner-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>

        </div>

        {/* Game Information */}
        <div>
            <GameInformation image={product.image}/>
        </div>

        <div>
            <HowToTopUp/>
        </div>

        <h2>{product.name}</h2>
        <p>
            {product.description}
        </p>
    </div>
    </>)
    
}

