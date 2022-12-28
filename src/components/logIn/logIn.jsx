import { useContext } from "react";
import {MomentoContext} from "../momentoContext";
import { useFormik } from "formik";


const LogIn = () => {
    const {setLogIn,setDetails}=useContext(MomentoContext)
     
    return ( 
        <>
            
            <p>log in</p>
            <button onClick={()=>{setLogIn(false);setDetails(true)}}>Register</button>
            
        </>
     );
}
 
export default LogIn;