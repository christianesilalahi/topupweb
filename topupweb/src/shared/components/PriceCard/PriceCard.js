import logo from "./../../../test_image.jpg"
import './PriceCard.css'


export const PriceCard = ({title = "19 Diamonds (17 + 2 Diamonds)", price="Rp5.539", image=logo}) => {
    return(<>
    {/* <div className="price-card-container"> */}
        <div className="price-card">
            <div className="price-card-left">
                <div className="price-card-title">
                    {title}
                </div>
                <div className="price-card-price">
                    {price}
                </div>
            </div>

            <div className="price-card-right">
                <img src={image} alt="Mobile Legends" className="img-fluid" style={{ borderRadius: '10px' }} />
            </div>

        </div>
    {/* </div> */}
    </>)
}