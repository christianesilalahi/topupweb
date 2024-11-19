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
import { PaymentOptions } from "./PaymentOptions/PaymentOptions"
import { DefaultOrderData } from "../../shared/utils/Variables/Variables"

export const DetailProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        image: test_image,
    })

    const [orderData, setOrderData] = useState(DefaultOrderData)
    const [price, setPrice] = useState("0")
    const [selectedCard, setSelectedCard] = useState(null);
    const [handleSticky, setHandleSticky] = useState(false)


    //handle order data change
    const handleOrderDataChange = (event) => {
        const { name, value } = event.target
        setOrderData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handlePriceChange = (newPrice) => {
        setPrice(newPrice)
        setSelectedCard(newPrice)
        setOrderData(prevData => ({
            ...prevData,
            nominal: newPrice
        }))
        setHandleSticky(true)
    }

    useEffect(()=>{
        console.log(orderData)
        console.log(price)
        console.log(selectedCard)
    }, [orderData, price])

    const [jumlah, setJumlah] = useState("")

    const jumlahOnChange = (v) =>{setJumlah(v.target.value)}

    //product dummy
    let products = {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        image: test_image,
    }


    // useEffect(()=>{
    //     const fetchProduct = async() => {
    //         try{
    //             const response = await fetch(`/api/products/${id}`)
    //             const data = await response.json()
    //             setProduct(data)
    //         } catch (e) {
    //             console.error('Error fetching product: ', e)
    //         }
    //     }

    //     fetchProduct();
    // }, id)

    if (!product) {
        setProduct({
            id: 1,
            name: 'Product 1',
            description: 'Description of Product 1',
            image: test_image,
        }
    )
        console.log(product)
        // return(<>
        //     <div>Loading...</div>
        // </>)
    }

    const priceCard = () => {
        return(<>
            <div className="price-card-container">
            <PriceCard nominal="10000" 
                handleOnChange={handlePriceChange} 
                isActive={selectedCard === "10000"}
                />
            <PriceCard nominal="12000" handleOnChange={handlePriceChange} 
                isActive={selectedCard === "12000"} />
            <PriceCard nominal="20000" handleOnChange={handlePriceChange} 
                isActive={selectedCard === "20000"} />

            </div>
        </>)
    }

    const jumlahPembelian = () => {
        return(<>
            <Input 
                inputName={"nominal"} 
                placeholder={"Masukkan jumlah pembelian"}
                onChange={handleOrderDataChange}
                value={orderData.nominal}
            />
        </>)
    }

    const kodePromo = () => {
        return(<>
            <Input 
                inputName={"kodePromo"} 
                placeholder={"Ketik kode promo Anda"}
                onChange={handleOrderDataChange}
                value={orderData.kodePromo}
            />
        </>)
    } 

    const detailKontak = () => {
        return(<>
            <Input 
                inputName={"email"} 
                placeholder={"Email"}
                onChange={handleOrderDataChange}
                value={orderData.email}
                label={"Email"}
            />


            <Input 
                inputName={"nomorTelepon"} 
                placeholder={"No. WhatsApp"}
                onChange={handleOrderDataChange}
                value={orderData.nomorTelepon}
                label={"No. WhatsApp"}
            />
        </>)
    }

    function metodePembayaran(){
        return(<>
        
        </>)
    }

    return(<>
    <div>
        {/* banner */}
        <div className="banner-section text-white text-center py-5" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'top', height:"340px" }}>
        </div>

        {/* Game Information */}
        <div>
            <GameInformation image={product.image}/>
        </div>

        {/* Transaction Section */}
        <div className="transaction-container game-info-section py-4 container-fluid">
            <Row>
                <Col lg={4} xs={12}>
                    <div className="">
                        <BodyGameTransactionSection/>
                    </div>
                </Col>
                <Col lg={8} xs={12} >
                    <div className="body-game-order">
                        <TopUpCard firstBox="1" 
                            secondBox="Masukkan data akun" 
                            component={<FormSelection orderData={orderData} handleOnChange={handleOrderDataChange} />}
                            
                        />
                        
                        <TopUpCard firstBox="2" secondBox="Pilih Nominal" component={priceCard()}/>

                        <TopUpCard firstBox="3" secondBox="Masukkan Jumlah Pembelian" component={jumlahPembelian()} />

                        <TopUpCard firstBox="4" secondBox="Pilih Pembayaran" component={<PaymentOptions/>} /> 

                        <TopUpCard firstBox="5" secondBox="Kode Promo" component={kodePromo()}  />

                        <TopUpCard firstBox="6" secondBox="Detail Kontak" component={detailKontak()} />
                    </div>
                </Col>
            </Row>
        </div>

        {handleSticky && (<>
        <div className="sticky-bottom-container">
            <div className="text-center p-4" >
                <h4>Selected Price: {selectedCard}</h4>
                <p>This is a sticky div that stays at the bottom.</p>
            </div>
        </div>      
        </>)}

        <h2>{product.name}</h2>
        <p>
            {product.description}
        </p>
    </div>
    </>)
    
}

