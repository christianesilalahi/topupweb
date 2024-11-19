import { useState } from "react"
import logo from "./../../../test_image.jpg"
import './PriceCard.css'


export const PriceCard = ({title = "19 Diamonds (17 + 2 Diamonds)", nominal="Rp5.539", image=logo, handleOnChange, isActive}) => {

    const handleClick = () => {
        handleOnChange(nominal)
        console.log(isActive)
    }
    return(<>
    <div className={`price-card-outer ${isActive ? 'active' : ''}`} onClick={handleClick} > 
        <div className="price-card">
            <div className="price-card-left">
                <div className="price-card-title">
                    {title}
                </div>
                <div className="price-card-price">
                    {nominal}
                </div>
            </div>

            <div className="price-card-right">
                <img src={image} alt="Mobile Legends" className="img-fluid" style={{ borderRadius: '10px' }} />
            </div>

        </div>
    </div>
    </>)
}