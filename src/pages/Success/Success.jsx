import logo from '../../assets/Logo.svg'
import Item from "../../component/Item/Item"
import './Success.css'
import {useLocation, useNavigate } from "react-router-dom"
import Total from "../../component/Total/Total"
import moment from "moment/moment"
import { getCustomerById } from "../../graphql/query"
import { useQuery, useMutation } from "@apollo/client"
import Loading from '../../assets/loading'
import { useEffect } from "react"
import { deleteAllBag } from "../../graphql/mutation"
import { getCart } from "../../graphql/query"
import Button from "../../element/Button"

const Success = () => {
    const dateTime = new Date()
    const location = useLocation()
    const id = location.state.id

    const {data, loading, error} = useQuery(
        getCustomerById,{
            variables: {id:id}
        }
    )
    useEffect(() => {
        console.log(data);
    })
    
    const [deleteAll] = useMutation(deleteAllBag,{
        refetchQueries:[getCart]
    })

    const navigate = useNavigate()

    const handleClick= async () => [
        navigate(
            '/'
        ),
        await deleteAll()
    ]

    return (
        <div id="SuccessLinear"> 
            <div className="col-md-11 col-lg-8 col-11 row m-auto ">
                <div className="m-auto text-center col-md-6 col-lg-4 mt-5"> 
                <i className="fa fa-check-circle fa-5x" style={{color: "#00a91b", height:"100px"}}></i>
                    <h3>Payment Successful!</h3>
                    <p>A copy of your receipt has been to your email.</p>
                </div>
                <div className="bg-white">
                    <hr />
                    {
                        loading?
                        <div className='d-flex align-items-center justify-content-center' style={{width:'100%', height:'100vh'}}>
                            <Loading/>
                        </div>
                        :
                        data?.customer.map((item) => {
                            return(
                                <>
                                <div className="d-flex flex-row justify-content-between me-4 ms-4">
                                <p className="hiddenDate">{moment(dateTime).format('MMM Do YY')}</p>
                                    <img src={logo} alt="" className="hiddenImg" width={'13%'}/>
                                    <p>Your order is confirmed!</p>
                                    <p>Hi, <b>{item.name}</b></p>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between me-4 ms-4">
                                    <div className="hidden">
                                        <p>Date</p>
                                        <p>{moment(dateTime).format('MMM Do YY')}</p>
                                    </div>
                                    <div>
                                        <p>Order no</p>
                                        <p>324-56743433</p>
                                    </div>
                                    <div className="hidden">
                                        <p>Payment type</p>
                                        <p>{item.card}</p>
                                    </div>
                                    <div className="marginLeft">
                                        <p>Shipping Address</p>
                                        <p>{item.address} , {item.city}, {item.province}</p>
                                    </div>
                                </div>
                                <hr />
                                </>
                            )
                        })
                    }
                    <div className="me-4 ms-4">
                        <Item/>
                    </div>
                    <hr />
                    <Total/>
                    <hr />
                </div>
                <Button
                    text='Back to Shopping'
                    className='btn oranye col-7 col-md-5 col-lg-3 m-auto mb-5 mt-3'
                    onClick={handleClick}
                />
                {/* <Link to={'/'} className="btn oranye col-7 col-md-5 col-lg-3 m-auto">
                    Back to Shopping
                </Link> */}
            </div>
        </div>
    )
}
export default Success