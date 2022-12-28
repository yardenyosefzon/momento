import { Route,Routes,BrowserRouter } from "react-router-dom";

import LogIn from "./logIn/logIn";
import HomePage from './home/homePage';
import Bracelet from "./home/bracelet";
import Navigation from "./home/navigation";
import NavigationTo from "./home/navigationTo";
import SharedNavigation from "./home/sharedNavigation";

import { useContext } from 'react';
import { MomentoContext } from './momentoContext';
import Details from "./logIn/details";
import HasBracelet from './logIn/hasBracelet';
import Varifacation from "./logIn/varifacation";
import BraceletDetalis from './logIn/braceletDetails';

const MomentoApp = () => {

  const {home,bracelet,navigation,sharedNavigation,navigationTo
  ,logIn,details,hasBracelet,varifacation,braceletDetails
}=useContext(MomentoContext)

    return ( 

        <BrowserRouter>

          <Routes>
               
              <Route path="/" element={logIn?<LogIn/>:(details?<Details/>:(hasBracelet?<HasBracelet/>:(varifacation?<Varifacation/>:(braceletDetails?<BraceletDetalis/>:<logIn/>))))}/>
              <Route path="/purple" element={<></>}/>
              <Route path="/home" element={home?<HomePage/>:(bracelet?<Bracelet/>:(navigation?<Navigation/>:(sharedNavigation?<SharedNavigation/>:(navigationTo?<NavigationTo/>:<HomePage/>))))}/>

          </Routes>
        </BrowserRouter>
     );
}
 
export default MomentoApp;