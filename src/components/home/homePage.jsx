import { useContext } from "react";
import { MomentoContext } from "../momentoContext";

const HomePage = () => {

    const {setHome,setBracelet,setNavigation}=useContext(MomentoContext);

    return ( 
        <>
        <button onClick={()=>{setHome(false);setBracelet(true)}}>Bracelet</button>
        <button onClick={()=>{setHome(false);setNavigation(true)}}>Navigation</button>
        </>
     );
}
 
export default HomePage;