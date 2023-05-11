import { Link } from "react-router-dom"
import './Card1.css'
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

const Card2 = ({src, text, price, category, type, href, className, style, styleImg, onClick, id}) => {
    const navigate = useNavigate()
    const action = () => {
        navigate(
            `/ShopByCategory/${category}?`,
            {
                state: {
                    name : text,
                    id: id,
                    image : src,
                    price : price,
                    type : type,
                    category : category
                },
                replace: true
            }
        )
    }
    return(
        // <Link to={'/detail'} >
        // style={style ? style :{padding:'0px', width:'20%'}}
                <div className="card m-lg-4 col-lg-2 col-4 m-3 p-0"  onClick={action}>
            {/* <a href={href}> */}
                {/* <p>{id}</p> */}
                <img 
                    src={src} 
                    className = {className? className : "rounded-top card-img-top bg-peach"}
                    style={styleImg? styleImg : {maxWidth:'100%'}}
                    alt={id} />
                <div className="card-body">
                    <p className="" style={{margin:'0px'}}>
                    {category}
                    </p>
                </div> 
            {/* </a> */}
                </div>
        // </Link>
    )
}
export default Card2