import './Button.css'

export const CustomButton = ({title="", icon={}, onChange}) => {
    return(<>
        <div >
            <button className="custom-button" onChange={onChange}>
                {icon.icon()}
                {title}
            </button>
        </div>
    </>)
}