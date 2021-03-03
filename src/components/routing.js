import React, {components, useEffect,useState} from "react";
import Navbar from "./Navbar/Navbar"
import Details from "./Details";
import Result from "./Result";
import PartyDetails from'./PartyDetails';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Button from 'react-bootstrap/Button'
import {firebase} from '../firebase';


const Routing=()=> 
{ 

useEffect(() => {

}, []);

const logout = () =>{
  firebase.auth().signOut().then(() => {/*console.log('Signed Out');*/}).catch(e=>{console.error('Sign Out Error', e);});
}


return (
    <Router>
    <div>
           <Navbar/>
            <Switch>
            <Route path="/Online_Voting_System/Result" component={Result}/>
            <Route path="/Online_Voting_System/PartyDetails" component={PartyDetails}/>
            <Route path="/Online_Voting_System" component={Details}/>
           
            </Switch>
            <br></br>
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
            <Button variant="outline-info" size="sm" onClick = {logout}>Logout</Button>
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
      </div>
    </Router>

);
} 
  
export default Routing;