// import MenuNavbar from '../../elements/MenuNavbar/MenuNavbar'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import bag from '../../assets/bag.svg'
import love from '../../assets/love.svg'
import search from '../../assets/search.svg'
import user from '../../assets/user.svg'
import './Navbar.css'

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg row">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler ms-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div 
                    className="collapse navbar-collapse col-4 " 
                    id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/bestSeller'} className="nav-link" id='color'>             
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/shopByCategory/Necklace'} className="nav-link" id='color'>             
                                    Category
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/bestSeller'} className="nav-link" id='color'>             
                                    Best Seller
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-4 d-flex justify-content-end hidden">
                        <a className='navbar-brand' href="/">
                            <img style={{width:'50%'}} src={logo} alt="" />
                        </a>
                    </div>
                    <div className=" col-4 navbar-nav d-flex justify-content-end flex-row" >
                        {/* <a className='nav-link' href="/">
                            <img className='icon' src={search} alt="" />
                        </a>
                        <a className='nav-link' href="/">
                            <img className='icon' src={love} alt="" />
                        </a> */}
                        <Link to={'/bag'} className="nav-link" id='color'>
                                    
                            <img className='icon' src={bag} alt="" />
                        </Link>
                        {/* </a> */}
                        <a className='nav-link' href="/">
                            <img className='icon' src={user} alt="" />
                        </a>
                    </div>
                </div>
                
            </nav>
        </>
    )   
    
}

export default Navbar