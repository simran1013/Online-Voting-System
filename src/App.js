import logo from './logo.svg';
import './App.css';
import Login from './login/Login';
import React, {components, useEffect,useState} from 'react';
import {firebase} from './firebase'
import Dash from "./components/dash"
import ReactLoading from 'react-loading'
import Routing from './components/routing'



function App() {

  const [user , updateuser] = useState(false);
  const [isLoad , load] = useState(true);

  useEffect(() => {
      load(true);
      //firebase.auth().signOut().then(() => {/*console.log('Signed Out');*/}).catch(e=>{console.error('Sign Out Error', e);});
      firebase.auth().onAuthStateChanged((user) => {
      load(true);
      if (user) {
        updateuser(true);
        load(false);
        
      } else {
        updateuser(false);
        load(false);
      }
    });


  }, [])
  return (
    <div className="App">
         {isLoad ? (
          <div>
            <center><ReactLoading type={"bars"} color={"grey"} height={667} width={375}/></center>
          </div> 
          ) : (
             user ? (<Routing/>) : (<Login/>)
          )
        }
      
    </div>
  );
}

export default App;
