import React from 'react';
import { useFormik } from 'formik';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from '../element/Input';

const validate = values => {
    const errors = {};

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Your password must be at least 8 characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        
        validate,
        onSubmit: values => {
            if(values.email !== "" && values.email !== ""){
                // alert(JSON.stringify(values, null, 2));
                // console.log(email);
                navigate('/create', {replace:true})
            }
        },
    });

    return (
        <div className='form-signin col-6 col-lg-4 m-auto'>
            <h1 className='text-center mb-4'>Please sign in</h1>
            <form onSubmit={formik.handleSubmit}>
            {/* <form> */}
                    <div className="row">
                        <h3>My Information</h3>
                        <hr />
                        <div className="col-6">
                            <Input
                                className="form-control color"
                                placeholder="First Name"
                            />    
                        </div>
                        <div className="col-6">
                            <Input
                                className="form-control color"
                                placeholder="Last Name"
                            />    
                        </div>
                        <div>
                            <Input
                                className="form-control color"
                                placeholder="Email Address"
                                name="email"
                                type="email"
                                id='email'                                
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <Input
                                className="form-control color"
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <h3>Shipping Information</h3>
                        <hr />
                        <div>
                            <Input
                                className="form-control color"
                                placeholder="Address"
                            
                            />
                        </div>
                        {/* <div className="row"> */}
                            <div className="col-4">
                                <Input
                                    className="form-control color"
                                    placeholder="City"
                                />
                            </div>
                            <div className="col-4">
                                <Input
                                    className="form-control color"
                                    placeholder="Province"
                                />
                            </div>
                            <div className="col-4">
                                <Input
                                    className="form-control color"
                                    placeholder="State"
                                />
                            </div>
                            <div className="col-8">
                                <Input
                                    className="form-control color"
                                    placeholder="Apartment, suite, etc ( optional )"
                                />
                            </div>
                            <div className="col-4">
                                <Input
                                    className="form-control color"
                                    placeholder="Zip Code"
                                />
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="row">
                        <h3>Billing Information</h3>
                        <hr />
                        <div>
                            <Input
                                className="form-control color"
                                placeholder="Name on Card"
                            />
                            <Input
                                className="form-control color"
                                placeholder="Debit / Credit Card Number"
                            />
                        </div>
                        <div className="col-4">
                                <Input
                                    className="form-control color"
                                    placeholder="Expiration Date"
                                />
                        </div>
                        <div className="col-4">
                            <Input
                                className="form-control color"
                                placeholder="CVV"
                            />
                        </div>
                        <div className="col-4">
                            <Input
                                className="form-control color"
                                placeholder="Zip Code"
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse">
                        <Link to={'/confirm'} className="btn oranye ms-2 ps-4 pe-4">
                            Confirm
                        </Link>
                        {/* <button className="ms-2">
                            Confirm
                        </button> */}
                        <button onClick={() => navigate(-1)} className="btn btn-red ps-4 pe-4">
                            Cancel
                        </button>
                        
                        {/* <Button
                            className="btn btn-button bg-primary"
                        >
                            Cancel
                        </Button>
                        <Button>
                            Confirm
                        </Button> */}
                    </div>
                <div className='mb-3 form-floating form-floating-group' >
                    
                   
                    <input
                        id="floatingInput"
                        name="email"
                        type="email"
                        className='form-control'
                        onChange={formik.handleChange}
                        // value={formik.values.email}
                    />
                     <label htmlFor="floatingInput">Email</label>
                    {formik.errors.email ? <div className='text-danger fw-light '>{formik.errors.email}</div> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className='form-control'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div className='text-danger fw-light'>{formik.errors.password}</div> : null}
                </div>

            <button 
                type="submit"
                className="btn btn-primary d-grid col-10 mx-auto mt-5 mb-3"
            >
                Sign in
            </button>

            <Link to="/register" style={{ textDecoration: "none" }}>
                Create new account
            </Link>
            </form>
        </div>
    );
};
export default Login