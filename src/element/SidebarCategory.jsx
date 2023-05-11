import './SideBarCategory.css'
import { GetProductByCategory } from '../graphql/query';
import { Link } from 'react-router-dom';

const SidebarCategory = () => {
    const action = ($cat, e) => {
        console.log($cat);
        GetProductByCategory($cat)

    }
    return(
        <>
            <ul>
                <li className='distance' value='Necklace'>
                    {/* <a href="" >Necklaces</a>
                     */}
                     <Link to={'/shopByCategory/Necklace'} >
                            {/* <button className='btn oranye'>  */}
                                Necklaces
                            {/* </button> */}
                        </Link>
                </li>
                <li className='distance'> 
                    <Link to={'/shopByCategory/Ring'} >
                        Rings
                    </Link>
                </li>
                <li className='distance'>
                    <Link to={'/shopByCategory/Bracelet'} >
                        Bracelets
                    </Link>
                </li>
                <li className='distance'>
                    <Link to={'/shopByCategory/Earring'} >
                        Earrings
                    </Link>
                </li>
            </ul>
        </>
    )
}
export default SidebarCategory