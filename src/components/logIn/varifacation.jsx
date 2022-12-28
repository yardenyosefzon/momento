import { useContext } from "react";
import { MomentoContext } from "../momentoContext";
import { Link } from "react-router-dom";

const Varifacation = () => {

const {varifacationSet,setBraceletDetails}=useContext(MomentoContext);

    return ( 
        <>
        <p>Varifacation</p>
        <button onClick={()=>{varifacationSet(false);setBraceletDetails(true)}}>Submit</button>
        </>
     );
}
 
export default Varifacation;