import Navbar from "../../component/Navbar/Navbar"
import Card1 from "../../element/Card1"
import bg from '../../assets/bg-rings.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../component/Footer/Footer"
// import { get } from "../../query/query"
import { gql, useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import Product from "../../component/Product/product"
import DetailProduct from "../../component/DetailProduct/DetailProduct"
import { GetProductList } from "../../graphql/query"

const Detail = () => {    

    const {data, loading, error} = useQuery(GetProductList)
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
            <div className="row mx-auto">
                <DetailProduct/>
            </div>
            <hr />
            <div className="container-fluid">
                <p>You Might Also Like</p>
                <div className='overflow-x-scroll d-flex flex-nowrap col-lg-12 col-md-12 m-0 col-12' >
                    <Product/>
                </div>
            </div>
            <div style={{margin:'0 10% 7% 10%'}}>
                <p>
                    Review
                </p>
                <hr />
                <p>Karina</p>
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <p>I really love these Chain for everyday. The clasp on them feels very secure too. Have slept in them and they’re very comfortable.</p>
                <hr />
                <p>Hana</p>
                {/* <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ebe89f",}} /> */}
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ebe89f"}} />
                <p>I like it</p>
                <hr />
            </div>
            <Footer/>
        </>
    )
}

export default Detail