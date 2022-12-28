import { useContext } from "react";
import { MomentoContext } from "../momentoContext";
import { Link } from "react-router-dom";

const HasBracelet = () => {

    const {setHasBracelet,varifacationSet}=useContext(MomentoContext);

    return ( 
        <>
        <p>Has bracelet</p>
        <button onClick={()=>{setHasBracelet(false);varifacationSet(true)}}>YES</button>
        <Link to="/home">NO</Link>
        </>
     );
}
 
export default HasBracelet;