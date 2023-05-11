import Loading from '../../assets/loading'
import { useQuery } from '@apollo/client'
import Product from '../../component/Product/product'
import { GetProductList } from '../../graphql/query'
import Navbar from '../../component/Navbar/Navbar'

const BestSeller = () => {
    const {data, loading, error} = useQuery(GetProductList)

    if (loading){
        return(
            <div className='d-flex align-items-center justify-content-center' style={{width:'100%', height:'100vh'}}>
                <Loading/>
            </div>
        )
    }

    return(
        <>
        <Navbar/>
            <div className='row d-flex justify-content-center'>
            <Product/>
            </div>
        </>
    )
}

export default BestSeller