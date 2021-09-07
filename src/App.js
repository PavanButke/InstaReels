import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AuthProvider from "./AuthProvider";
import {useEffect} from "react"
import { firestore } from "./firebase"
let  App= () =>{

  // useEffect(()=>
  // {

    // //add
    // firestore.collection("users").add({body : "this is new"});

    //get

  //   async function f()
  //   {
  //     let querySnapshot = await firestore.collection("users").get();

  //     for(let i=0 ; i<querySnapshot.docs.length ; i++)
  //     {
  //       console.log(querySnapshot.docs[i].data());
  //     }
  //   }
  //   f();
  // }, []);

  return (
    <>
     

     
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
   
      </AuthProvider>
    </>
  );
}


export default App;

