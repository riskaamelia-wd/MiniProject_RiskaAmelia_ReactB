// import { get } from "../../query/query"
import { useState, useEffect } from "react"
import { useQuery, gql } from "@apollo/client"
import Card1 from "../../element/Card1"
import { useNavigate, useLocation, useParams } from "react-router-dom"

const Product = ({className, style, styleImg, name, id, image, category, price, type}) => {
    const GetProductList = gql`
        query GetProduct {
            product {
            id
            image
            category
            name
            price
            type
            }
        }
    `
    
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
        // const item = location.state.data

    const action = () => {
        navigate(
            `detail/${id}`,
            {
                state: {
                    name : name,
                    id: id,
                    image : image,
                    price : price,
                    type : type
                }
            }
        )
    }

    const {data, loading, error} = useQuery(GetProductList)
    const [products, setProduct] = useState([])
    useEffect(() => {
        console.log(data);
        if(!loading && error !== undefined){
            setProduct(data.product)
        }
        // console.log('item',data.product);
    })

    return (
        <>
            {
                loading?
                <p>Loading...</p>
                :
                data?.product.map((item,idx) => 
                idx>3 && 
                    // <Link to={'/detail'} className='col-2'>
                    <div className="col-md-4 col-lg-2 col-5 m-2 col-5">
                        <Card1
                            // onClick={()=>navigate(`detail/${item.id}`)}
                            className={className}
                            style={style}
                            // styleImg={styleImg}
                            id={item.id}
                            src={item.image}
                            text={item.name} 
                            price={item.price}
                            type={item.type}
                            // href={'/Detail'}
                        />
                    </div>
                    
                    // </Link>
                )
            }
        </>
    )
}

export default Product