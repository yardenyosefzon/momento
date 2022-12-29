import { useContext } from "react";
import { MomentoContext } from "../momentoContext";
import { Link } from "react-router-dom";

const Varifacation = () => {

const {varifacationSet,setBraceletDetails}=useContext(MomentoContext);

    return ( 
        <>
        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupFile01">Upload an ID</label>
            <input type="file" class="form-control" id="inputGroupFile01"></input>
        </div>
        <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupFile01">Upload picture with  the children</label>
            <input type="file" class="form-control" id="inputGroupFile01"></input>
        </div>
        <button onClick={()=>{varifacationSet(false);setBraceletDetails(true)}}>Submit</button>
        </>
     );
}
 
export default Varifacation;