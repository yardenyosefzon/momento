import { useContext } from "react";
import { Link } from "react-router-dom";
import { MomentoContext } from "../momentoContext";

const Purple=()=>{
   const{setPurpleBarcodebul,setPurpleMain,setpurpleback}=useContext(MomentoContext)
    return(
       <div className='main'>
        
            <div className="barcode" >
                <img src="https://barcode.tec-it.com/barcode.ashx?data=https%3a%2f%2fwww.tec-it.com&code=MobileQRUrl" alt="" />
                <div>
                <Link to='/purpleMain'> <button className="button" 
                // onClick={()=>{setPurpleBarcodebul(false);setPurpleMain(true)}}
                >
                     scan me  </button> </Link>
                    <Link to="/home"> <button id="button-bottom" > Back</button></Link>
                </div>
            </div>
       </div>
    );
}
export default Purple;