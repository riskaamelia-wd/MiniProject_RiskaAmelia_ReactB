import { Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "../component/Navbar/Navbar";
import LandingPage from "../pages/LandingPage/LandingPage";
import ShopByCategory from "../pages/ShopByCategory/ShopByCategory";
import Detail from "../pages/Detail/Detail";
import Order from "../pages/Order/Order";
import Bag from "../pages/Bag/Bag";
import Confirm from "../pages/Confirm/Confirm";
import Success from "../pages/Success/Success";
import Login from '../pages/Login'
import FormEdit from "../component/Form/FormEdit";
import BestSeller from "../pages/BestSeller/BestSeller";

const Layout = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <div>
                <Routes>
                    <Route index element={<LandingPage/>}/>
                    <Route path= "shopByCategory/:category" element={<ShopByCategory/>}/>
                    <Route path="detail/:id" element={<Detail/>}/>
                    <Route path="order" element={<Order/>}/>
                    <Route path="bag" element={<Bag/>}/>
                    <Route path="confirm" element={<Confirm/>}/>
                    <Route path="success" element={<Success/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path="formEdit" element={<FormEdit/>}/>
                    <Route path="bestSeller" element={<BestSeller/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Layout