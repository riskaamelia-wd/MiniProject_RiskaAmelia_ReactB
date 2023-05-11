import { useQuery } from "@apollo/client"
import { getCart } from "../../graphql/query"

const Total = () => {
    const {data, loading, error} = useQuery(getCart)
    
    const subTotal = data?.bag.reduce((subTotal, item) => subTotal +  item.total, 0)

    const total = subTotal + 10

    return(
        <>
            <div className="d-flex justify-content-end ">
                <div className="col-3">
                    <p>Subtotal</p>
                    <p>Delivery</p>
                    <p>Total</p>
                </div>
                <div className="me-5">
                    <p>$ {subTotal}</p>
                    <p>$ 10</p>
                    <p>$ {total}</p>
                </div>
            </div>
        </>
    )
}

export default Total