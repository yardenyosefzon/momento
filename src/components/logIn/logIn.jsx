import { useContext } from "react";
import {MomentoContext} from "../momentoContext";
import { Link } from 'react-router-dom';


const LogIn = () => {
    const {users,setLogIn,setDetails,formik,setCerruntUser}=useContext(MomentoContext)
     
    return ( 
        <>
            
            <form onSubmit={(e)=>formik.handleSubmit(e)}>

             
            <div class="mb-3">
                <label for="mail" class="form-label">Email address</label>
                <input type="email" name="mail" class="form-control" aria-describedby="emailHelp" value={formik.values.mail} onChange={formik.handleChange}></input>
                <div class="form-text">We'll never share your email with anyone else.</div>
            </div>
             <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" value={formik.values.password} onChange={formik.handleChange}></input>
            </div>
            
                <button onClick={()=>{setLogIn(false);setDetails(true)}}>Register</button>
                {(users.findIndex(user=>user.password===formik.values.password))===(users.findIndex(user=>user.mail===formik.values.mail))&&(users.findIndex(user=>user.mail===formik.values.mail)!==-1)?<Link onClick={()=>{setCerruntUser(users.find(user=>user.mail===formik.values.mail))}} to="/home">Submit</Link>:<button type="Submit">Submit</button>}

            </form>
        </>
     );
}
 
export default LogIn;