import { useContext } from "react";
import { MomentoContext } from "../momentoContext";
import { Link } from "react-router-dom";

const BraceletDetalis = () => {
    return ( 
        <>
        <form className="container main">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="name" class="form-control"></input>
            </div>
            <div class="mb-3">
                <label for="serialNumber" class="form-label">serialNumber</label>
                <input type="serialNumber" class="form-control"></input>
            </div>
            <div class="mb-3">
                <label for="serialNumber" class="form-label">serialNumber</label>
                <input type="serialNumber" class="form-control"></input>
            </div>
            <div class="mb-3">
                <label for="wandtedDistance" class="form-label">wandtedDistance</label>
                <input type="wandtedDistance" class="form-control"></input>
            </div>
            
        <Link to="/home"><button className="button">submit</button></Link>
        </form>

        </>
     );
}
 
export default BraceletDetalis;