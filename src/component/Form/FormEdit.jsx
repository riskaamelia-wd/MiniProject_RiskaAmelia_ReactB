import React from "react";
import { useFormik } from "formik";
import Button from "../../element/Button"
import './Form.css'
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { editCustomer } from "../../graphql/mutation"
import { getCustomer, getCustomerById } from "../../graphql/query"
import { v4 as uuid } from 'uuid';

import Navbar from "../Navbar/Navbar"


const validate = values => {
    const errors = {}

    if (!values.name){
        errors.name = 'Required'
    } else if (!/^[a-zA-Z]+$/.test(values.name)){
        errors.name = 'Symbol and number is not allowed'
    }

    if(!values.phone){
        errors.phone = "Required"
    } else if(!/^[0-9]+$/.test(values.phone)){
        errors.phone = "Symbol is not allowed"
    }

    if(!values.email){
        errors.email = 'Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email address"
    }

    if (!values.address){
        errors.address = 'Required'
    } else if (!/^[0-9a-zA-Z]+$/.test(values.address)){
        errors.address = 'Symbol is not allowed'
    }

    if(!values.city){
        errors.city = "Required"
    } else if(!/^[a-zA-Z]+$/.test(values.city)){
        errors.city = "Symbol and number is not allowed"
    }

    if(!values.province){
        errors.province = 'Required'
    } else if(!/^[a-zA-Z]+$/i.test(values.province)){
        errors.province = "Symbol and number is not allowed"
    }

    if (!values.zipCode){
        errors.zipCode = 'Required'
    } else if (!/^[0-9]{5}$/.test(values.zipCode)){
        errors.zipCode = 'Invalid Zip Code'
    }

    if(!values.card){
        errors.card = "Required"
    } else if(!/^(?:5[1-5][0-9]{14})$/.test(values.card)){
        errors.card = "Invalid mastercard number"
    }

    if(!values.cvv){
        errors.cvv = 'Required'
    } else if(!/^[0-9]{3,4}$/i.test(values.cvv)){
        errors.cvv = "Invalid email address"
    }

    if (!values.expDate){
        errors.expDate = 'Required'
    }

    return errors
}

const FormEdit = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {data, loading, error} = useQuery(
        getCustomerById,{
            variables: {id:location.state.id}
        }
    )

    const customerId = data.customer.find((item) => item.id === location.state.id)
    
    const [edit] =  useMutation(editCustomer,
        {
            refetchQueries : [getCustomer]
        }
    )

    const formik = useFormik({
        initialValues:{
            name :customerId.name,
            phone:customerId.phone,
            email:customerId.email,
            address:customerId.address,
            city:customerId.city,
            province:customerId.province,
            additionalAddress:customerId.additionalAddress,
            zipCode:customerId.zipCode,
            card:customerId.card,
            expDate:customerId.expDate,
            cvv:customerId.cvv,
        },
        validate,
        onSubmit:async values => {
            if(values.name !== '' && values.address !== '' !== '' && values.card !== '' && values.city !== '' && values.cvv !== '' && values.email !== '' && values.expDate !== '' && values.phone !== '' && values.province !== '' && values.zipCode !== '' ){
                const id = uuid()
                console.log(id);
                await edit({
                    variables:{
                        id:customerId.id,
                        name : values.name,
                        address : values.address,
                        additionalAddress : values.additionalAddress,
                        card : values.card,
                        city : values.city,
                        cvv : values.cvv,
                        email : values.email,
                        expDate : values.expDate,
                        phone : values.phone,
                        province : values.province,
                        zipCode : values.zipCode
                        
                    }
                })
                
                navigate(
                    '/confirm?'
                    ,{
                        state:{
                            id : location.state.id
                        }
                    }
                )
            }
        }
    })

    return(
        <>
        <Navbar/>
            <div className="col-md-8 col-10 col-lg-7 m-auto mb-4 mt-3">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <h3>My Information</h3>
                        <hr />
                        <div className="col-lg-6">
                            <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className='form-control color'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name ? <div className='text-danger fw-light '>{formik.errors.name}</div> : null}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                className='form-control color'
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            />
                            {formik.errors.phone ? <div className='text-danger fw-light '>{formik.errors.phone}</div> : null}
                        </div>
                    
                    <div>
                        <label htmlFor="email">email</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                className='form-control color'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email ? <div className='text-danger fw-light '>{formik.errors.email}</div> : null}
                    </div>
                    </div>
                    <div className="row mt-4">
                        <h3>Shipping Information</h3>
                        <hr />
                        <div>
                            <label htmlFor="address">Address</label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    className='form-control color'
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                />
                                {formik.errors.address ? <div className='text-danger fw-light '>{formik.errors.address}</div> : null}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="city">City</label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    className='form-control color'
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                />
                                {formik.errors.city ? <div className='text-danger fw-light '>{formik.errors.city}</div> : null}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="province">Province</label>
                                <input
                                    id="province"
                                    name="province"
                                    type="text"
                                    className='form-control color'
                                    onChange={formik.handleChange}
                                    value={formik.values.province}
                                />
                                {formik.errors.province ? <div className='text-danger fw-light '>{formik.errors.province}</div> : null}
                        </div>
                        <div className="col-lg-8">
                            <label htmlFor="additionalAddress">Additional Address</label>
                                <input
                                    id="additionalAddress"
                                    name="additionalAddress"
                                    type="text"
                                    className='form-control color'
                                    onChange={formik.handleChange}
                                    value={formik.values.additionalAddress}
                                />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="zipCode">Zip Code</label>
                                <input
                                    id="zipCode"
                                    name="zipCode"
                                    type="text"
                                    className='form-control color'
                                    onChange={formik.handleChange}
                                    value={formik.values.zipCode}
                                />
                                {formik.errors.zipCode ? <div className='text-danger fw-light '>{formik.errors.zipCode}</div> : null}
                        </div>
                    </div>
                    <div className="row mb-4 mt-4">
                        <h3>Billing Information</h3>
                        <hr />
                        <div>
                            <label htmlFor="card">Master Card Number</label>
                                <input
                                    id="card"
                                    name="card"
                                    type="text"
                                    className='form-control color'
                                    onChange={formik.handleChange}
                                    value={formik.values.card}
                                />
                                {formik.errors.card ? <div className='text-danger fw-light '>{formik.errors.card}</div> : null}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="expDate">Expiration Date</label>
                                <input
                                    id="expDate"
                                    name="expDate"
                                    type="month"
                                    className='form-control color'
                                    onChange={formik.handleChange}
                                    value={formik.values.expDate}
                                />
                                {formik.errors.expDate ? <div className='text-danger fw-light '>{formik.errors.expDate}</div> : null}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="cvv">CVV</label>
                                <input
                                    id="cvv"
                                    name="cvv"
                                    type="text"
                                    className='form-control color'
                                    onChange={formik.handleChange}
                                    value={formik.values.cvv}
                                />
                                {formik.errors.cvv ? <div className='text-danger fw-light '>{formik.errors.cvv}</div> : null}
                        </div>

                    </div>

                    <div className="d-flex flex-row-reverse mb-5">
                            <Button
                                className='btn oranye ms-2 ps-4 pe-4'
                                type='submit'
                                text='Confirm'
                            />
                        <button onClick={() => navigate(-1)} className="btn btn-red ps-4 pe-4">
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default FormEdit