import { useContext } from "react";
import { MomentoContext } from "../momentoContext";

const Navigation = () => {

const {setNavigation,setSharedNavigation,setNavigationTo}=useContext(MomentoContext);

    return ( 
        <>
        <p>navi</p>
        <button onClick={()=>{setNavigation(false);setNavigationTo(true)}}>Navigate to </button>
        <button onClick={()=>{setNavigation(false);setSharedNavigation(true) }}>Share navigate </button>
        </>
     );
}
 
export default Navigation;