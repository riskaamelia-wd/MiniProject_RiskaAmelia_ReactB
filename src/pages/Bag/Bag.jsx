import ItemBag from "../../component/ItemBag/ItemBag"
import Navbar from '../../component/Navbar/Navbar'
import SideOrder from '../../component/SideOrder/SideOrder'
import {useSelector} from 'react-redux'
import { getCart } from "../../graphql/query"
import { useMutation, useQuery } from "@apollo/client"
import Loading from '../../assets/loading'
import Button from "../../element/Button"
import { useNavigate } from "react-router-dom"
import { deleteCart, editBag } from "../../graphql/mutation"
import { useEffect, useState } from "react"
import EmptyBag from "../../component/ItemBag/EmptyBag"

const Bag = () => {
    const [edit] = useMutation(editBag,{
        refetchQueries: [getCart]
    })
    const {data, loading, error} = useQuery(getCart)
    const navigate = useNavigate()

    const [bag, setBag] = useState([])

    useEffect(() => {
        if(!loading && !error){
            setBag(data?.bag)
        }
        console.log(data);
    }, [loading])

    
    const subTotal = bag.reduce((subTotal, item) => subTotal +  item.total, 0)

    const handleCheckout = () => {
       
        navigate('/order')
    }

    const [deleteBag] = useMutation(deleteCart,{
        refetchQueries:[getCart]
    })


    const increment = async (idx, item) => {
        const itembag = bag
        
        console.log(itembag, ' bag');
        const itemBagId = bag[idx]?.id
        const itemId = item.id
        // let quantity = item.quantity
        // console.log(itemBagId, 'item bag');
        // console.log(itemId, 'item');
        // console.log(bag.indexOf(idx), ' index')

        // if(itemBagId === itemId){
        //     quantity = item.quantity + 1
        //     console.log(quantity, ' quantity ');
        //     // setBag([...bag, {quantity: item.quantity + 1}] )
        //     setBag([...bag, {quantity: quantity}] )
        //     // setBag({...bag, [quantity] : quantity})
        //     console.log(bag, ' bag increment');
        // }

        const newArray = bag.map((item, i) => {
            if (idx === i) {
              return { ...item, total : ( 1 + item.quantity ) * item.bag_product.price , quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
          setBag(newArray);
          console.log(item.quantity + 1, ' basg');

          await edit({
            variables:{
                id : item.id,
                bag : {
                    quantity : item.quantity + 1,
                    total : item.total
                }
            }
          })
      
    }

    const decrement =async (idx, item) => {
        const newArray = bag.map((item, i) => {
            if (idx === i) {
              return { ...item, total : (item.quantity - 1 ) * item.bag_product.price , quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
          setBag(newArray);
          await edit({
            variables:{
                id : item.id,
                bag : {
                    quantity : item.quantity - 1,
                    total : item.total
                }
            }
          })
    }

    const handleDelete = async  (item) => {
        await deleteBag({
            variables:{
                id : item.id
            }
        })
    }

   
    return (
        <>
            <div className="sticky-top bg-white">
                <Navbar/>
            </div>

            <div className="container-fluid row">
                <div className="col-md-7">
                    <h6>Bag</h6>
                    <div className="d-flex flex-row justify-content-between">
                        {
                            bag?.length === 0 ? 
                                <EmptyBag/>
                               :
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th></th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loading?
                                            <tr>
                                                <td>
                                                <div className='d-flex align-items-center justify-content-center' style={{width:'100%', height:'100vh'}}>
                                                <Loading/>
                                            </div>
                                                </td>
                                            </tr>
                                            
                                            :
                                            bag?.map((item,idx) => 
                                                    
                                                <ItemBag
                                                    key={item.id}
                                                    image={item.bag_product.image}
                                                    name={item.bag_product.name}
                                                    type={item.bag_product.type}
                                                    quantity={item.quantity}
                                                    decrement={()=> decrement(idx, item)}
                                                    increment={()=>increment(idx, item)}
                                                    total={item.total}
                                                    deleteItem={() => {handleDelete(item)}}
                                                />
                                            )}
                                    </tbody>
                                    
                                </table>
                            }
                        {/* } */}
                    </div>
                        
                </div>
                <div className="col-md-4 mt-4 end-0 me-3">
                        <div className="border border-secondary-subtle rounded shadow-sm" style={{marginTop:'-30px'}}>
                        <div className="container-fluid">
                <h3 className="text-center mt-3">Order Total</h3>
                <hr />
                </div>
                <div className="d-flex flex-row justify-content-between me-3 ms-3">
                    <h5>Total</h5>
                    <p>$ {subTotal}</p>
                </div>
                <div className="d-flex justify-content-center m-3">
                    <Button
                        className='btn oranye ps-5 pe-5'
                        text='Checkout'
                        onClick={handleCheckout}
                    />
                </div>

                        </div>
  
            </div>
            </div>

        </>
    )
}

export default Bag