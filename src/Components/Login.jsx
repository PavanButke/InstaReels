import { useContext ,useEffect } from "react";
import {signInWithGoogle, auth} from "../firebase"
import {authContext} from "../AuthProvider";
import { Redirect } from "react-router-dom"
let Login =()=>{

  let user = useContext(authContext);


 
  return (
  <>
  {user ? <Redirect to ="/"/> : ""}
  <button onClick={()=>{signInWithGoogle();
        
  }}
  className="brn-btn-primar m-4">Login With Google</button>

  {/* <button onClick={()=>{
    auth.signOut();
  }}>
    Log out
  </button> */}
  </>
  ) 
}
export default Login;
