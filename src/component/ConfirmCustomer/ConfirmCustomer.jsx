import { useLocation, useNavigate } from "react-router-dom"
import { useMutation, useQuery } from "@apollo/client"
import Loading from '../../assets/loading'
import { getCustomerById, getCart, getCustomer } from "../../graphql/query"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import './ConfirmCustomer.css'
import { deleteAllBag, editCustomerProduct, deleteCustomer } from "../../graphql/mutation"
import PopUp from "../../element/PopUp"
import { Link } from "react-router-dom"

const ConfirmCustomer = () => {
    const location = useLocation()
    const id = location.state.id
    console.log(id, ' id');
    const {data, loading, error} = useQuery(
        getCustomerById,{
            variables: {id:id}
        }
    )

    const {data: dataCart, loading: loadingCart, error : errorCart} = useQuery(getCart)

    useEffect(() => {
        console.log(data);
        console.log(dataCart);
    })
    const subTotal = dataCart?.bag.reduce((subTotal, item) => subTotal +  item.total, 0)

    const delivery = Math.floor(Math.random() * 30) + 5

    const total = subTotal + delivery
    const stringTotal = total.toString()

    const [updateCustomer] = useMutation(editCustomerProduct,{
        refetchQueries:[getCustomer]
    })

    const [deleteCust] = useMutation(deleteCustomer,{
        refetchQueries:[getCustomer]
    })

    const nameBag = dataCart?.bag.map((item) => item.bag_product.name)
    const quantityBag = dataCart?.bag.map((item) => item.quantity)
    
    const stringNameBag = nameBag?.toString()
    const stringQuantityBag = quantityBag?.toString()

    console.log(data);

    const handleEdit=() => {
        navigate(
            '/formEdit',{
                state:{
                    id : id
                }
            }
        )
    }

    const navigate = useNavigate()

    const handleClick = async () => {
        
        await updateCustomer({
            variables:{
                id : id,
                nameBag : stringNameBag,
                quantityBag : stringQuantityBag,
                total : stringTotal
            }
        })
        navigate(
            '/success',{
                state:{
                    id : id
                }
            }
        )

        
    }

    const handleCancel = async () => {
       
        await deleteCust({
            variables:{
                id:id
            }
        })
        navigate('/')
    }

    return(
        <>
        {
            loading?
            <div className='d-flex align-items-center justify-content-center' style={{width:'100%', height:'100vh'}}>
                <Loading/>
            </div>
            :
            data?.customer.map((item) => {
                return(
                    <>
                    <div className="row">
                        
                        <div className="col-md-7">
                            <div className="d-flex flex-row justify-content-between">
                                <h5>Shipping Information</h5>
                                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#e0c385",}} className="mt-1 edit1" onClick={handleEdit}/>
                            </div>

                            <table>
                                <tr>
                                    <th>Name</th>
                                    <td> : </td>
                                    <td>{item.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td> : </td>
                                    <td>{item.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td> : </td>
                                    <td>{item.phone}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td> : </td>
                                    <td>{item.additionalAddress} {item.address} , {item.city}, {item.province}, {item.zipCode} </td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-5">
                            <div className="d-flex flex-row justify-content-between">
                                <h5 className="margin">Payment</h5>
                                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#e0c385",}} className="mt-1 edit2" onClick={handleEdit}/>
                        
                            </div>
                            <table>
                                <tr>
                                    <th>Paid With</th>
                                    <td> : </td>
                                    <td>{item.card}</td>
                                </tr>
                                <tr>
                                    <th>Exp. Date</th>
                                    <td> : </td>
                                    <td>{item.expDate}</td>
                                </tr>
                                <tr>
                                    <th>CVV</th>
                                    <td> : </td>
                                    <td>{item.cvv}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div className="col-11">
                    {
                        loadingCart?
                        <div className='d-flex align-items-center justify-content-center' style={{width:'100%', height:'100vh'}}>
                            <Loading/>
                        </div>
                        :
                        dataCart?.bag.map((item) => 
                            <div className='d-flex flex-row mb-3 justify-content-between row'>
                                <div className='d-flex flex-row col-6'>
                                    <img src={item.bag_product.image} alt="" width={"40%"}/>
                                    <p className='ms-3'>{item.bag_product.name}</p>
                                </div>
                                <p className='col-3'>Qty : {item.quantity}</p>
                                <p className='col-3'>$ {item.total}</p>
                            </div>
                        )
                    }
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-end ">
                <div className="col-3">
                    <p>Subtotal</p>
                    <p>Delivery</p>
                    <p>Total</p>
                </div>
                <div className="me-5">
                    <p>$ {subTotal}</p>
                    <p>$ {delivery}</p>
                    <p>$ {total}</p>
                </div>
            </div>
            <hr />
            <div className="d-flex flex-row-reverse mb-4">
                    <PopUp
                        btnText={'Proceed to Pay'}
                        className={'btn oranye ps-4 pe-4'}
                        classNameBtn={'warning'}
                        // title={'Confirm'}
                        body={"You can't change your data after confirmation"}
                        onClick={handleClick}
                        
                    />
                    <PopUp
                        btnText={'Cancel Order'}
                        className={'btn btn-red me-3 ps-4 pe-4'}
                        classNameBtn={'red'}
                        body={"Are you sure you want to cancel this order?"}
                        onClick={handleCancel}
                        
                    />
                </div>
                    </>
                )

            
            })
        }
        </>
    )
}

export default ConfirmCustomer