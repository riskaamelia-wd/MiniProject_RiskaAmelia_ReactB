import Input from "../../element/Input"
import bg from '../../assets/Rectangle 38.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
// import {GetProductList} from '../Navbar'
import { gql, useMutation, useQuery } from "@apollo/client"
import { getProductById } from "../../graphql/query"
import { useParams } from "react-router-dom"
import { getCart } from "../../graphql/query"
import { deleteCart } from "../../graphql/mutation"

const ItemBag = ({name, image, total, type, quantity, deleteItem, increment, decrement,key}) => {
 
  

    // const location = useLocation()
    // console.log('id => ',location.state.id);
     

    // console.log('id location ',data);
    // console.log(location.state.name);
    // const action = () => {
    //     navigate(
    //         `detail/${id}`,
    //         {
    //             state: {
    //                 name : text,
    //                 id: id,
    //                 image : src,
    //                 price : price,
    //                 type : type
    //             }
    //         }
    //     )
    // // }

    // let [cart, setcart] = useState([])
    // let localCart = localStorage.getItem('cart')
    // let cartString = useState()
    // let id = location.state.id
    // const {data, loading, error} = useQuery(GetProductList)

    // const addItem = (item) => {
    //     let cartCopy = [...cart]
    //     let {id} = item
    //     let existingItem = cartCopy.find(cartItem => cartItem.id === id)

    //     if(existingItem) {
    //         existingItem.quantity += item.quantity
    //     } else {
    //         cartCopy.push(item)
    //     }

    //     setcart(cartCopy)
    //     let stringCart = JSON.stringify(cartCopy)
    //     localStorage.setItem('cart ', stringCart)
    // }

    // const updateItem = (itemId, amount) => {
    //     let cartCopy= [...cart]
    //     let existentItem = cartCopy.find(item => item.id == itemId)
    //     if(!existentItem) return
    //     existentItem.quantity += amount
        
    //     if (existentItem.quantity <= 0){
    //         cartCopy = cartCopy.filtert(item => item.id != itemId)
    //     }

    //     setcart(cartCopy)
    //     let cartString = JSON.stringify(cartCopy)
    //     localStorage.setItem('cart ', cartString)
    // }

    // const removeItem = (itemId) => {
    //     // console.log('data ',data);
    //     // data = [...cart]
    //     setcart(data)
    //     cart = data.product.filter(item => item.id != id)
    //     setcart(cart)
    //     cartString = JSON.stringify(cartString)
    //     localStorage.setItem('cart ', cartString)
    // }

    // useEffect(() => {
    //     localCart = JSON.parse(localCart)
    //     if(localCart) setcart(localCart)
    // }, [])

    return (
        <>
            <tr key={key}>

                {/* <td>
                    <Input
                        type='checkbox'
                    />
                </td> */}
                <td>
                    <img src={image} alt="" 
                    width={"100px"}
                    />
                </td>
                <td >
                        <p>{name}</p>
                        <p>{type}</p>
                </td>
                <td className="d-flex flex-row rounded border-2 border-dark-subtle justify-content-between mt-3" style={{width:"100px", padding:'0', height:'40px'}}>
                    <button className="rounded" style={{border:'none', width:'30px', backgroundColor:'white'}} onClick={decrement}>-</button>
                    <p>{quantity}</p>
                    <button className="rounded" style={{border:'none', width:'30px', backgroundColor:'white'}} onClick={increment}>+</button>
                </td>
                <td>
                    <p>$ {total}</p>
                </td>
                <td>
                    <a href="">
                        <FontAwesomeIcon style={{color: "#1e1e1e",}} icon={faTrashCan} 
                            onClick={deleteItem}
                        />
                    </a>
                </td>
            </tr>
            
            {/* <hr /> */}
        </>
    )
}

export default ItemBag