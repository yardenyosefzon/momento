import { createContext, useState } from "react";
import { Context } from "react";
import { useFormik } from "formik";

export const MomentoContext=createContext();

const AppContext = props => {

    ///////////formik

    const formik=useFormik({

        initialValues:{

            firstName:'',
            sureName:'',
            mail:'',
            password:''

        },
        onSubmit:values=>{
            
        },

    });

    const {children}=props;

    //////////user data
    const [users,setUsers]=useState([]);


    /////////login area
    const [logIn,setLogIn]=useState(true);
    const [details,setDetails]=useState(false);
    const [hasBracelet,setHasBracelet]=useState(false);
    const [varifacation,varifacationSet]=useState(false);
    const [braceletDetails,setBraceletDetails]=useState(false);
    
    ////////home area
    const [home,setHome]=useState(true);
    const [bracelet,setBracelet]=useState(false);
    const [navigation,setNavigation]=useState(false);
    const [sharedNavigation,setSharedNavigation]=useState(false);
    const [navigationTo,setNavigationTo]=useState(false);
    
    ///////purple area
    const [purple,setPurple]=useState(true);
    const [whosLost,setWhosLost]=useState(false);
    const [denied,setDenied]=useState(false);
    return ( 

        <MomentoContext.Provider value={{formik,home,setHome,bracelet,setBracelet,navigation,setNavigation,sharedNavigation,setSharedNavigation,navigationTo,setNavigationTo
        ,logIn,setLogIn,details,setDetails,hasBracelet,setHasBracelet,varifacation,varifacationSet,braceletDetails,setBraceletDetails
        }}>

            {children}

        </MomentoContext.Provider>
    
     );
}
 
export default AppContext;