// import './Input.css'

const Input = ({value, placeholder, onChangeText, type, className, name,id}) => {
    return (
        <>

            <div className="form-floating form-floating-group mb-3" >
            <input
            // style={{width : "300px", height:'20px', fontSize:'12px'}}
                type={type}
                
                name={name}
                value = {value}
                onChange = {onChangeText}
                className ={className}
                // className="form-control"
                id={id}
                placeholder={placeholder}
            />
            <label htmlFor="floatingInput" 
            // style={{fontSize : "12px"}}
            >{placeholder}</label>
            </div>   
            
        </>
    )
}

export default Input