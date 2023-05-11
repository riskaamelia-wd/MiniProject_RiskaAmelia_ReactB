import Item from "../Item/Item"
import './SideOrder.css'
import Loading from '../../assets/loading'
import { useQuery } from "@apollo/client"
import { getCart } from "../../graphql/query"
import Button from "../../element/Button"
import { addToCart } from "../../graphql/mutation"
import { useNavigate } from "react-router-dom"


const SideOrder = ({total}) => {
    const navigate = useNavigate()

    const {data, loading, error} = useQuery(getCart)
    const subTotal = data?.bag.reduce((subTotal, item) => subTotal +  item.total, 0)


    const handleCheckout = () => {
        navigate('/order')
    }

    return (
        <div className="border border-secondary-subtle rounded shadow-sm" style={{marginTop:'-30px'}}>
            <div className="container-fluid">
                <h3 className="text-center mt-3">Order Total</h3>
                <hr />
                    <Item/>
                <hr />
                    {/* <div>
                    <div className="d-flex flex-row justify-content-between me-3 ms-3">
                        <p>Subtotal</p>
                        <p>$ {total}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between me-3 ms-3">
                        <p>Delivery</p>
                        <p>$10.00</p>
                    </div>
                    <hr style={{marginTop:'-5px'}}/>
                </div> */}
                
{/* 
                <div>
                    <div className="d-flex flex-row justify-content-between me-3 ms-3">
                        <p>Subtotal</p>
                        <p>$200.00</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between me-3 ms-3">
                        <p>Delivery</p>
                        <p>$10.00</p>
                    </div>
                    <hr style={{marginTop:'-5px'}}/>
                </div> */}
                <div className="d-flex flex-row justify-content-between me-3 ms-3">
                    <h5>Total</h5>
                    <p>$ {subTotal}</p>
                </div>
                {/* <div className="d-flex justify-content-center m-3">
                    <Button
                        className='btn oranye ps-5 pe-5'
                        text='Checkout'
                        onClick={handleCheckout}
                    />
                </div> */}
            </div>

        </div>
    )
}
export default SideOrder