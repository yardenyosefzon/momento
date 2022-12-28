import { useContext } from "react";
import { MomentoContext } from "../momentoContext";

const HomePage = () => {

    const {setHome,setBracelet,setNavigation,users,cerruntUser}=useContext(MomentoContext);

    return ( 
        <>
        {console.log(cerruntUser.bracelets)};
        {cerruntUser.bracelets.map(bracelet=><button>{bracelet.name}</button>)} 
        
        <button onClick={()=>{setHome(false);setNavigation(true)}}>Navigation</button>
        </>
     );
}
 
export default HomePage;