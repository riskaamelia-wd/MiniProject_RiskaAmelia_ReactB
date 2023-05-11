import { useLocation, useNavigate } from 'react-router-dom'
import bg from '../../assets/Rectangle 38.svg'
import Button from '../../element/Button';
import { useState, useEffect } from 'react';
import {getCart, getProductById} from '../../graphql/query'
import { useMutation, useQuery } from '@apollo/client';
import Loading from '../../assets/loading'
import { addToCart } from '../../graphql/mutation';

const DetailProduct = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location',location);
    // const [bag, setBag] = useState({
    //     name : location.state.name,
    //     image : location.state.image,
    //     price : location.state.price,
    //     type : location.state.type
    // })

    // const action = () => {
    //     navigate(
    //         '/bag?',
    //         {
    //             // replace:true,
    //             // header: null
    //             state: {
    //                 name : location.state.name,
    //                 id: location.state.id,
    //                 image : location.state.image,
    //                 price : location.state.price,
    //                 type : location.state.type
    //             },
    //             replace: true
    //         }
    //     )
    // }
    const [quantity, setQuantity] = useState(1)
    // const [id, setId] = useState('')
    // const [total , setTotal] = useState()

    const id = location.state.id
    const {data, loading} = useQuery(getProductById,{
        variables:{id}
    })

    // const {add} = AddProductToCart()
    
    const [add] = useMutation(addToCart,{
        refetchQueries:[{query: getCart}]
    })

    const total = quantity * location.state.price 

    const handleAddToCart = () => {
        add({variables:{
            id : id,
            total : total
        }})
        console.log('hai ', total);
        // navigate('/bag')
        alert('Success Add to Bag')
    }


    // const productBag = () => {
    //     setBag(bag)
    //     console.log('setBag', bag);
    //     navigate('/bag')
    // }

    // let [cart, setcart] = useState([])
    // let localCart = localStorage.getItem('cart')

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
    //     let cartCopy = [...cart]
    //     cartCopy = cartCopy.filter(item => item.id != itemId)
    //     setcart(cartCopy)
    //     let cartString = JSON.stringify(cartString)
    //     localStorage.setItem('cart ', cartString)
    // }

    // useEffect(() => {
    //     localCart = JSON.parse(localCart)
    //     if(localCart) setcart(localCart)
    // }, [])


    return(
        <>
        {
            loading?
            <div className=' m-auto' style={{width:'100%', height:'100vh'}}>
                <Loading/>
            </div>
            :
            data?.product.map((item) => {
                return(
                    <div className='row d-flex justify-content-center'>
                        <div className="col-2">
                            <img src={item.image} alt="" style={{width:'50%'}}/>
                        </div>
                        <div className="col-4">
                            <img src={item.image} alt=""  style={{width:'80%'}}/>
                        </div>
                        <div className="col-3">
                            <h4>
                                {item.name}
                            </h4>
                            <h6>$ {item.price}</h6>
                            <p>{item.type}</p>
                            <Button 
                                className='btn oranye '
                                text="Add to Bag"
                                onClick={handleAddToCart}
                            />
                            
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default DetailProduct