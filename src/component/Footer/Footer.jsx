import logo from '../../assets/Logo.svg'
import './Footer.css'
import Input from '../../element/Input'
import Textarea from '../../element/Textarea'
import Navbar from '../Navbar/Navbar'

const Footer = () => {
    return (
        <div id='linearColor'>
            
        {/* <div className='d-flex flex-row justify-content-around row m-2'>
            <img src={logo} alt="" className='logoFooter col-lg-2'/>
            <div className="col-lg-2 col-6 col-md-3 row ms-lg-3" style={{textAlign:'left'}}>
                    <p className="col-12 fw-bold">Useful Links</p>
                    <div className="col-12">
                    <ul>
                    <li className="list-group-item">
                        <a  href="#">
                            Home
                        </a>
                        </li>
                        <li className="list-group-item">
                        <a  href="#">
                            About us
                        </a>
                        </li>
                        <li className="list-group-item ">
                        <a href="#">
                            Services
                        </a>
                        </li>
                        <li className="list-group-item">
                        <a  href="#">
                            Terms of service
                        </a>
                        </li>
                    </ul>
                    </div>
            </div>
            <div className="col-lg-2 col-6 row col-md-3" style={{textAlign:'left'}}>
                    <p className="col-12 fw-bold">Useful Links</p>
                    <div className="col-12">
                    <ul>
                    <li className="list-group-item">
                        <a  href="#">
                            Home
                        </a>
                        </li>
                        <li className="list-group-item">
                        <a  href="#">
                            About us
                        </a>
                        </li>
                        <li className="list-group-item ">
                        <a href="#">
                            Services
                        </a>
                        </li>
                        <li className="list-group-item">
                        <a  href="#">
                            Terms of service
                        </a>
                        </li>
                    </ul>
                    </div>
            </div>
            <div className='col-10 col-lg-4 col-md-5'>
                <p className='fw-bold'>Contact Us</p>
     
                <Input
                    className="form-control"
                    placeholder="Your email address"

                    type="text"
                    name="name"
                />
                <Textarea
                    placeholder="Leave a comment here"
                    type="text"
                    name="name"
                />
            </div>
        </div> */}
            <hr />
            <div className='d-flex justify-content-center  ms-3 me-3 row'>
                <div className='col-6 text-center'>
                    <p>© Classy, Inc. 2023. We love our customers!</p>
                </div>
                {/* <div className='col-6'>
                    <p>Follow us : </p>
                </div> */}
            </div>
        </div>
    )
}
export default Footer