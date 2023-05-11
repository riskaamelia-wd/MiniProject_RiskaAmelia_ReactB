import Navbar from "../../component/Navbar/Navbar"
import Card1 from "../../element/Card1"
import SidebarCategory from "../../element/SidebarCategory"
import bg from '../../assets/bg-rings.svg'
import { Link, useNavigate, useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import Product from "../../component/Product/product"
import { GetProductByCategory } from "../../graphql/query"
import Loading from '../../assets/loading'

const ShopByCategory = () => {
    const navigate = useNavigate()
    const {category} = useParams()
    const {data, loading, error} = useQuery(GetProductByCategory, {
        variables:{category}
    })
    
    // const category = data.product.filter(item => item.category)
    console.log('category => ', category);
    const [products, setProduct] = useState([])
    useEffect(() => {
        console.log(data);
        if(!loading && error !== undefined){
            setProduct(data.product)
        }
    })

    
    return (
        <>
            <Navbar/>
            <hr style={{marginTop:'-1px'}}/>
            <div className="row">
                <div className="col-md-3 col-lg-2 col-3 p-0 me-2 p-md-4 ps-lg-3">
                    <SidebarCategory/>
                </div>
                <div className="col-9 row ">
                    <div className="col-7 d-flex flex-row">
                        {
                            loading?
                            <div className='d-flex align-items-center justify-content-center' style={{width:'100%', height:'100vh'}}>
                                <Loading/>
                            </div>
                            :
                            data?.product.map((item,idx) => 
                                idx>0 &&
                                <div className="m-2">

                                    <Card1
                                        src={item.image}
                                        text={item.name}
                                        price={item.price}
                                        type={item.type}
                                        id={item.id}
                                        onClick={() => navigate(`detail/${item.id}`)}
                                    />
                                </div>
                                )
                        }
                    </div>
                    
                    {/* </div> */}
                    
                </div>
            </div>

        </>
    )
}
export default ShopByCategory