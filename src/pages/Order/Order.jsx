import Footer from "../../component/Footer/Footer"
import Form from "../../component/Form/Form"
import Navbar from "../../component/Navbar/Navbar"
import SideOrder from "../../component/SideOrder/SideOrder"
import './Order.css'

const Order = () => {
    return (
        <>
        
            <div className="sticky-top bg-white">
                <Navbar/>
            </div>
            <p className="mt-2 ms-2">Bag &gt; <span style={{color:'#E7B365'}}>Information</span> &gt; Confirm</p>
            <hr />
            <div className="row container-fluid m-lg-3">
                <div className="col-md-7 me-lg-5">
                    <Form/>
                </div>
                <div className="col-lg-4 mt-4 end-0 me-lg-3 sideOrder col-md-5">
                
                        <SideOrder
                    />
                </div>

            </div>
        </>
    )
}
export default Order