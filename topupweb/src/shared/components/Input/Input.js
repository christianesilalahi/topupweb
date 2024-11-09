import "./Input.css"

export const Input = ({inputName, value, placeholder="", cName=[], onChange, label="", autoComplateValue=false}) => {

    return(<>
        <div 
            className={["input-container", cName].join(' ')}>
            {label ? <label className="label-form" >{label}</label> : <></>}
            <input 
                className="input-form"
                name={inputName} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange}
                autoComplete={autoComplateValue}
                autoCorrect={false}
                autoSave={false}
                />
        </div>
    </>)
}