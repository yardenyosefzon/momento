import { useContext } from "react";
import { MomentoContext } from "../momentoContext";

const Details = () => {

const {setDetails,setHasBracelet,formik}=useContext(MomentoContext);

    return ( 

        <form onSubmit={formik.handlesubmit}>
        <p>details</p>
        <button onClick={()=>{setDetails(false);setHasBracelet(true)}}>Submit</button>
        </form>
        
     );
}
 
export default Details;