import { useContext } from "react";
import { MomentoContext } from "../momentoContext";

const Bracelet = () => {

const {cerruntBracelet,precentage}=useContext(MomentoContext);

    return (  

        <>
        
            <p>{cerruntBracelet.name}</p>
            <table class="table">
                
                   <div className="Bflex">

                       <div>
                        off/on
                       </div>

                        <div>

                    
                        </div> 
                   </div>
                   <div className="Bflex">

                        <div>
                            Distance
                        </div>

                        <div>
                       {(precentage<100?<p style={{color:"green"}}>{precentage/100*cerruntBracelet.wantedDistance}</p>:precentage>100?<p style={{color:"red"}}>{precentage/100*cerruntBracelet.wantedDistance}</p>:<p style={{color:"orange"}}>{precentage/100*cerruntBracelet.wantedDistance}</p>)}     
                        </div>
                   </div>
                   <div className="Bflex">

                   </div>
                   <div className="Bflex">

                   </div>

            </table>

        </>

    );
}
 
export default Bracelet;
    
