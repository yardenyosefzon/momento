import { createContext, useState } from "react";
import { Context } from "react";
import { useFormik } from "formik";
import User from './user';
import Bracelet from './bracelet';

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
        onSubmit:e=>{
            e.preventDefault();
            e.target.reset();
        },

    });

    const {children}=props;

    //////////user data
    let bracelet1=new Bracelet('Nora','765jfghg','');
    let bracelet2=new Bracelet('Shon','264h','');
    let bracelet3=new Bracelet('Faruk','1234g4','');
    let user1=new User('Shoshana','Damari','Shoshana@gmail.com','g1234',[bracelet1,bracelet2,bracelet3])
    let user2=new User('Mama','Op','Mama@gmail.com','g1234',[bracelet1,bracelet2,bracelet3])
    let user3=new User('Rafi','Yosefzon','Rafi@gmail.com','g1234',[bracelet1,bracelet2,bracelet3])
    let user4=new User('Lomen','Marla','Lomen@gmail.com','g1234',[bracelet1,bracelet2,bracelet3])
    const [users,setUsers]=useState([user1,user2,user3,user4]);
    const [cerruntUser,setCerruntUser]=useState({});

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

        <MomentoContext.Provider value={{users,formik,home,setHome,bracelet,setBracelet,navigation,setNavigation,sharedNavigation,setSharedNavigation,navigationTo,setNavigationTo
        ,logIn,setLogIn,details,setDetails,hasBracelet,setHasBracelet,varifacation,varifacationSet,braceletDetails,setBraceletDetails,
        cerruntUser,setCerruntUser}}>

            {children}

        </MomentoContext.Provider>
    
     );
}
 
export default AppContext;