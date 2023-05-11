import bg from '../../assets/Rectangle 38.svg'
import Loading from '../../assets/loading'
import { useMutation, useQuery } from '@apollo/client'
import { getCart, getCustomer } from '../../graphql/query'
import { editCustomerProduct } from '../../graphql/mutation'


export default function Item() {
    
    const {data, loading, error} = useQuery(getCart)

    const [edit] = useMutation(editCustomerProduct,{
        refetchQueries: [getCustomer]
    })

    const nameBag = data?.bag.map((item) => item.bag_product.name)
    const quantityBag = data?.bag.map((item) => item.quantity)
    console.log(nameBag ,' datadat');
    console.log(quantityBag ,' datadat');

    // const handle = (e) => {
    //     e.preventDefault()
    //     edit({
    //         variables:{
    //             id:
    //         }
    //     })
    // }
    return (
        <>
        {
            loading?
            <div className='d-flex align-items-center justify-content-center' style={{width:'100%', height:'100vh'}}>
                <Loading/>
            </div>
            :
            data?.bag.map((item) => 
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
        </>
    )
}