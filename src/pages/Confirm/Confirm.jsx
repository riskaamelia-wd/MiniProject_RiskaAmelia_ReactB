import { Link, useLocation, useNavigate } from "react-router-dom"
import ConfirmCustomer from "../../component/ConfirmCustomer/ConfirmCustomer"
import Navbar from "../../component/Navbar/Navbar"

const Confirm = () => {
    const location = useLocation()
    const id = location.state.id
    // const {data, loading, error} = useQuery(
    //     getCustomerById,{
    //         variables: {email:email}
    //     }
    // )
    
    // const [product, setProduct] = useState([])
    //  useEffect(() => {
    //     console.log('loading', loading);
    //     console.log('data ', data);
    //     console.log('error = ', error);
    //     console.log('sssa => ', location.state.email);

    //     if(!loading && error !== undefined){
    //         setProduct(data.customer)
    //     }
    // })

    return (
        <div id="linear">
            <Navbar/>
            <div className="col-8 m-auto">
                <h3>Confirm & Pay</h3>
                <p>Bag &gt; Information &gt; <span style={{color:'#FAECD6'}}>Confirm</span></p>

                
                <div className="row justify-content-around bg-white">
                        <ConfirmCustomer/>
                    
                </div>

            </div>
        </div>
    )
}

export default Confirm