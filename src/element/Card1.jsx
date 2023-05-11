import { Link } from "react-router-dom"
import './Card1.css'
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

const Card1 = ({src, text, price, type, href, className, style, styleImg, onClick, id}) => {
    const navigate = useNavigate()
    const action = () => {
        navigate(
            `/detail/${id}?`,
            {
                state: {
                    name : text,
                    id: id,
                    image : src,
                    price : price,
                    type : type
                },
                replace: true
            }
        )
    }

    return(
        <div className="card p-0" 
        // style={{height:'100%'}}  
        onClick={action}>
        <img 
            src={src} 
            className = {className? className : "rounded-top card-img-top bg-peach"}
            style={styleImg? styleImg : {maxWidth:'100%'}}
            alt={id} />
        <div className="card-body">
            <p className="" style={{margin:'0px'}}>
            {text}
            </p>
            <p style={{margin:'0px'}}>$ {price}</p>
            <p style={{margin:'0px'}}>{type}</p>
        </div> 
        </div>
    )
}
export default Card1