import { useContext } from "react";
import { MomentoContext } from "../momentoContext";

const Details = () => {

const {setDetails,setHasBracelet,formik}=useContext(MomentoContext);

    return ( 
<div className="formdiv">
        <form className="form" onSubmit={formik.handlesubmit}>
              <div class="mb-3">
                <label for="fullname" class="form-label">First Name</label>
                <input type="email" name="fullname" class="form-control" aria-describedby="emailHelp" value={formik.values.firstName} onChange={formik.handleChange}></input>
                </div>
              <div class="mb-3">
                <label for="surename" class="form-label">Sure Name</label>
                <input type="email" name="surename" class="form-control" aria-describedby="emailHelp" value={formik.values.sureName} onChange={formik.handleChange}></input>
                </div>
             <div class="mb-3">
                <label for="mail" class="form-label">Email address</label>
                <input type="email" name="mail" class="form-control" aria-describedby="emailHelp" value={formik.values.mail} onChange={formik.handleChange}></input>
                <div class="form-text">We'll never share your email with anyone else.</div>
            </div>
             <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" value={formik.values.password} onChange={formik.handleChange}></input>
            </div>
             <div class="mb-3">
                <label for="phonenumber" class="form-label">Phone Number</label>
                <input type="tel" name="phonenumber" class="form-control" pattern="[0-9]{10}" value={formik.values.phonenumber} onChange={formik.handleChange}></input>
            </div>
              <div class="mb-3">
                <label for="phonenumber" class="form-label">Phone Number</label>
                <input type="tel" name="phonenumber" class="form-control" pattern="[0-9]{10}" value={formik.values.phonenumber} onChange={formik.handleChange}></input>
            </div>
           

           <label for="relation"class="form-label">Relation </label>
            <select >
                     <option value=""  style={{ display: 'block' }}>Select</option>
        <option value="father" >Father</option>
        <br/>
        <option  type="mother" value={formik.values.select} onChange={formik.handleChange} style={{ display: 'block' }}>Mother</option>
        <option value="sister">Sister</option>
        <option value="brother">Brother</option>
               </select>
               <br/>
       
        <button onClick={()=>{setDetails(false);setHasBracelet(true)}}>Submit</button>
        </form>
        </div>
     );
}
 
export default Details;