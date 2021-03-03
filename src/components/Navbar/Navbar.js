import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom';

const Nbar = () => {
    return(
        <div>
          <Navbar bg="dark" variant="Light" fixed="top">
    <Navbar.Brand >Online Voting System</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/Online_Voting_System">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/Online_Voting_System/PartyDetails">Party Details</Link></Nav.Link>
      <Nav.Link ><Link to="/Online_Voting_System/Result">Result</Link></Nav.Link>
    </Nav>
    
      
     
   
  </Navbar>
        </div>
    )
}
export default Nbar;