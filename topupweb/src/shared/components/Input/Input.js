import "./Input.css"

export const Input = ({inputName, value, placeholder="", className="", onChange, label=""}) => {
    return(<>
        <div className={["input-container", className]}>
            <label className="label-form" >{label}</label>
            <input className="input-form"  name={inputName} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    </>)
}