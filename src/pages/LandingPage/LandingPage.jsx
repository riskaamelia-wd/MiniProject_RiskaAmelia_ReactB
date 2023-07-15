import Navbar from '../../component/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import bg from '../../assets/bg-rings.svg'
import necklace from '../../assets/Rectangle 38.svg'
import font from '../../assets/Elegant & Luxury.svg'
import './LandingPage.css'
import Button from '../../element/Button'
import Card1 from '../../element/Card1'
import Footer from '../../component/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import Product from '../../component/Product/product'
import { GetProductList } from '../../graphql/query'
import Loading from '../../assets/loading'
import Card2 from '../../element/Card2'
import bg2 from '../../assets//Rectangle 37.svg'

function LandingPage() {
    
    const navigate = useNavigate()
    const {data, loading, error} = useQuery(GetProductList)
    const [products, setProduct] = useState([])
    useEffect(() => {
        console.log(data);
        if(!loading && error !== undefined){
            setProduct(data.product)
        }
    })

    if (loading){
        return(
            <div className='d-flex align-items-center justify-content-center' style={{width:'100%', height:'100vh'}}>
                <Loading/>
            </div>
        )
    }

    return (
        <>
            <div id='linear'>
                <Navbar/>
                <div className='d-flex flex-row'>
                    <div className='jumbotronLeft col-12 col-lg-6 col-md-5 mt-md-3 ms-md-5 mt-4 ms-4'>
                        <img className='col-md-12 col-9 mt-md-5 mt-3' src={font} alt="" />
                        <p style={{fontSize:'32px', marginLeft:'-25px'}} className='m-md-0 pe-md-5 fs-md-5 col-8 ms-1 text'>Brilliant design and unparalleled craftsmanship.</p>
                        <Button
                        text='Shop Collection'
                            className='btn oranye rounded-pill col-5 col-md-6 col-lg-4 btn-top'
                            onClick={() => navigate('shopByCategory/Ring')}
                        />
                    </div>
                    {/* <div className='col-lg-6'> */}
                        <img className='jumbotronRight backgroundImage col-12  col-lg-7 col-md-9' src={bg} alt=""/>
                    {/* </div> */}
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <h2>Shop By Category</h2>
                    <p className='text-32'>Where wishlists come true. Discover the pieces of your dreams.</p>
                </div>
                <div className='row d-flex flex-row justify-content-center'>
                    {
                        data?.product.map((item,idx) => 
                            idx<4 &&
                            <Card2
                                src={item.image}
                                category={item.category}
                                // href={`/ShopByCategory/${item.category}`}
                            />
                        )
                    }
                </div>
            </div>
            <div className='d-flex flex-row mb-5 mt-5 row'>
                <div style={{textAlign:'left', margin:'25px'}} className='col-lg-2 col-md-3 col-11'>
                    <h3>Best Selling Jewelry</h3>
                    <p className='text-18'>Easiest way to luxury life by buying your favorite jewerly</p>
                    <Button
                        text='See More'
                        className='btn oranye col-10 col-md-9'
                        onClick={() => navigate('/bestSeller')}
                    />
                </div>

                {/* grid */}
                <div className='overflow-x-scroll d-flex flex-nowrap col-lg-9 col-md-8 m-0 col-12'>
                    <Product/>
                </div>
            </div>
            <div id='linearColor'>
                <div className='row mb-lg-4 mt-lg-4' id='about'>
                    <div className='col-lg-7 col-md-6 ms-lg-5 m-0 m-md-4'>
                        <h2 className='text-center'>About Us</h2>
                        <p>Our story began with a love for all things sparkly and beautiful. We started creating our own jewelry pieces as a hobby, but soon realized that we wanted to share our creations with others. So, we decided to turn our passion into a business and launch our own jewelry store.</p>
                        <p>
                        At our store, we offer a wide range of jewelry pieces, from dainty necklaces and bracelets to statement earrings and rings. We carefully handpick each piece to ensure that it meets our high standards of quality and style. We also strive to keep our prices affordable, so that everyone can enjoy beautiful jewelry without breaking the bank.
                        </p>
                    </div>
                    <div className='col-md-5 col-lg-3 ms-lg-5 mt-md-5 ms-1'>
                        <img style={{width:"100%"}} src={bg2} alt="" />
                    </div>
                </div> 
                <hr />
                <div className='d-flex justify-content-center  ms-3 me-3 row'>
                    <div className='col-6 text-center'>
                        <p>© Classy, Inc. 2023. We love our customers!</p>
                    </div>
                    {/* <div className='col-6'>
                        <p>Follow us : </p>
                    </div> */}
                </div>
            </div>
            {/* <div className='marginTop'>
            <Footer/>
            </div> */}
        </>
    )
}

export default LandingPage