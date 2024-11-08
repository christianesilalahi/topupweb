import { useEffect, useState } from "react"
import { Col, Container, FormSelect, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import logo from "../../logo.svg"
import test_image from "../../test_image.jpg"
import banner from "../../HOK_banner.jpg"
import { GameInformation } from "./GameInformation"
import { HowToTopUp } from "./BodyGameComponents/HowToTopUp"
import { BodyGameTransactionSection } from "./BodyGameTransactionSection"
import { FormSelection } from "./BodyGameComponents/FormSelection"
import { TopUpCard } from "../../shared/components/TopUpCard/TopUpCard"
import { PriceCard } from "../../shared/components/PriceCard/PriceCard"
import { Input } from "../../shared/components/Input/Input"

export const DetailProduct = () => {
    //const {productID} = useParams()
    // const [product, setProduct] = useState(null)

    const [jumlah, setJumlah] = useState("")

    const jumlahOnChange = (v) =>{setJumlah(v.target.value)}

    let product = {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        image: test_image,
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

    function priceCard(){
        return(<>
            <div className="price-card-container">
            <PriceCard/>
            <PriceCard/>
            <PriceCard/>

            </div>
        </>)
    }

    function jumlahPembelian(){
        return(<>
            <Input label="Masukkan Jumlah Pembelian" inputName={"Masukkan Jumlah Pembelian"} value={jumlah} onChange={jumlahOnChange} />

        </>)
    }

    function metodePembayaran(){
        return(<>
        
        </>)
    }

    return(<>
    <div>
        
        {/* banner */}
        <div className="banner-section text-white text-center py-5" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'top', height:"224px" }}>
        </div>

        {/* Game Information */}
        <div>
            <GameInformation image={product.image}/>
        </div>

        {/* Transaction Section */}
        <div className="transaction-container game-info-section py-4 container-fluid">
            <Row>
                <Col lg={4} xs={12}>
                    <div>
                        <BodyGameTransactionSection/>
                    </div>
                </Col>
                <Col lg={8} xs={12}>
                    <div className="body-game-order">
                        <TopUpCard firstBox="1" secondBox="Masukkan data akun" component={<FormSelection/>} />
                        
                        <TopUpCard firstBox="2" secondBox="Pilih Nominal" component={priceCard()}/>

                        <TopUpCard firstBox="3" secondBox="Masukkan Jumlah Pembelian" component={jumlahPembelian()} />

                        <TopUpCard firstBox="4" secondBox="Pilih Pembayaran" /> 

                        <TopUpCard firstBox="5" secondBox="Kode Promo" />

                        <TopUpCard firstBox="6" secondBox="Detail Kontak" />
                    </div>
                </Col>
            </Row>
        </div>

        

        <h2>{product.name}</h2>
        <p>
            {product.description}
        </p>
    </div>
    </>)
    
}

