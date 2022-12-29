import { useContext } from "react";
import MomentoApp from "../momentoApp";
import { Link } from "react-router-dom";
import { MomentoContext } from './../momentoContext';

const ContactUs = () => {

    const {cerruntUser,setCerruntUser} =useContext(MomentoContext)
    
    return ( 
        <form style={{backgroundColor: "plum",width:"100vw",height:"100vh",position:"absolute"}} action="">
            <p className="m-4 fs-2 fw-bold  ">Leave your details, we will contact with you right back</p>    
            <div className="mb-3 fs-3 m-3">
                <label className="form-label">Email address:</label>
                <input type="email" class="form-control"></input>
                <div class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 fs-3 m-3">
                <label className="form-label fs-3">Phone number:</label>
                <input type="password" className="form-control"></input>
            </div> 
            <div className="mb-3 fs-3 m-3">
                <label class="form-label">More details:</label>
                <textarea class="form-control" rows="3"></textarea>
            </div>
            {cerruntUser.name?<Link className="text-decoration-none " to="/home">Go back</Link>:<Link to="/">Go back</Link>}
        </form>
     );
}
 
export default ContactUs;