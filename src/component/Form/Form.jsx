import React from "react";
import { useFormik } from "formik";
import Button from "../../element/Button"
import Input from "../../element/Input"
import './Form.css'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMutation } from "@apollo/client"
import { addCustomer } from "../../graphql/mutation"
import { getCustomer } from "../../graphql/query"
import { v4 as uuid } from 'uuid';


const validate = values => {
    const errors = {}

    if (!values.name){
        errors.name = 'Required'
    } else if (!/^[a-zA-Z\u00C0-\u00FF ]*$/.test(values.name)){
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

    // if (!values.address){
    //     errors.address = 'Required'
    // } else if (!/^[0-9a-zA-Z]+$/.test(values.address)){
    //     errors.address = 'Symbol is not allowed'
    // }

    if(!values.city){
        errors.city = "Required"
    } else if(!/^[a-zA-Z\u00C0-\u00FF ]*$/.test(values.city)){
        errors.city = "Symbol and number is not allowed"
    }

    if(!values.province){
        errors.province = 'Required'
    } else if(!/^[a-zA-Z\u00C0-\u00FF ]*$/i.test(values.province)){
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

const Form = () => {
    const navigate = useNavigate()
    
    const [add] = useMutation(addCustomer,{
        refetchQueries:[{query:getCustomer}]
    })

    const formik = useFormik({
        initialValues:{
            name :'',
            phone:'',
            email:'',
            address:'',
            city:'',
            province:'',
            additionalAddress:'',
            zipCode:'',
            card:'',
            expDate:'',
            cvv:''
        },
        validate,
        onSubmit:async values => {
            if(values.name !== '' && values.address !== '' !== '' && values.card !== '' && values.city !== '' && values.cvv !== '' && values.email !== '' && values.expDate !== '' && values.phone !== '' && values.province !== '' && values.zipCode !== '' ){
                const id = uuid()
                console.log(id);
                await add({
                    variables:{
                        object : {
                            id: id,
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
                    }
                })
                console.log(add);
                
                navigate(
                    '/confirm',{
                        state:{
                            id : id
                        }
                    }
                )
                window.location.reload()
            }
        }
    })

    return(
        <>
            <div>
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
                            <label htmlFor="card">MASTERCAR Number</label>
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

export default Form