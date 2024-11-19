import './Button.css'

export const CustomButton = ({title="", icon={}, onChange, isDisable}) => {
    return(<>
        <div >
            <button className={`custom-button ${isDisable ? "button-disable" : ""}`} onChange={onChange}>
                {icon.icon()}
                {title}
            </button>
        </div>
    </>)
}