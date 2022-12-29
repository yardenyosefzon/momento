import { useContext } from "react";
import { MomentoContext } from "../momentoContext";
import "./style.css"

const HomePage = () => {

    const {setHome,setBracelet,setNavigation,users,cerruntUser,setCerruntBracelet,cerruntBracelet}=useContext(MomentoContext);
console.log(cerruntBracelet);
    return ( 
        <>
          <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      momento
    </a>
  </div>
</nav>
<div className="main">
    <div className="content">
       
        {cerruntUser.bracelets.map(bracelet=>
    <div><button className="button" onClick={()=>{setHome(false);setBracelet(true);setCerruntBracelet(bracelet)}}>{bracelet.name}</button></div>)} 
        
        </div>
        <div className="footer">
        <button id="downbuttonR"><i class="bi bi-cart"></i> buy now</button>
        <button id="downbuttonL"> learn more</button>
        </div>
        </div>
       
        </>
     );
     
}
 
export default HomePage;






