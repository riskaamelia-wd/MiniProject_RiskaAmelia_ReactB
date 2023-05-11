// import './Input.css'

const Textarea = ({value, placeholder, onChangeText, type, className, name}) => {
    return (
        <>

            <div className="form-floating mb-3">
            <textarea
                type={type}
                name={name}
                value = {value}
                onChange = {onChangeText}
                className="form-control"
                id="floatingTextarea"
                placeholder={placeholder}
            />
            <label htmlFor="floatingTextarea" style={{fontSize : "12px"}}>{placeholder}</label>
            </div>   
               
        </>
    )
}

export default Textarea