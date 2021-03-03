import React, {components, useEffect,useState} from "react";
import Button from 'react-bootstrap/Button';
import './Detail.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import PartyDet from './PartyDetail.json';
import Axios from "axios";

const Details=()=> 
{ 

  //const [img , imgchange] = useState("Empty");
  var str = "";
  var sha256 = require('js-sha256').sha256;

useEffect(() => {
  Axios.get("https://vote09056.herokuapp.com/api/getp").then((response) => {
    console.log(response.data);
   });
}, []);

var party = "";
var n = "";
var v ="";

const votefor = (event) =>{
 party = event.target.value;
}

const name = (event) =>{
  n = event.target.value;
}

const voter = (event) =>{
  v = event.target.value;
}

const submit = () =>{

  Axios.post('https://vote09056.herokuapp.com/api/insert' , {command : `INSERT INTO party VALUES ('${str}' , '${party}' , '${n}','${v}')`} )
  .then(()=>{
    alert("sent");
  });

}
  

const handleNewImage = (event) => {

  const reader = new FileReader();
  reader.addEventListener("load", () => {
      str = reader.result;
      var hash = sha256.create();
      hash.update(str);
      str=hash.hex();
      console.log(str);

  });
  reader.readAsDataURL(event.target.files[0]);
  
}

return (

<div><br></br><br></br><br></br><br></br>
<Jumbotron >

  <Row>
  
    <Col sm={4}><Form.Label><b>Full Name</b></Form.Label></Col><Col sm={6}><Form.Control  placeholder="Enter AAdhar Card Name" onChange={name}/></Col>
    <Col sm={4}><br></br></Col><Col sm={6}><br></br> </Col>
    <Col sm={4}><Form.Label><b>Voter ID</b></Form.Label></Col><Col sm={6}><Form.Control  placeholder="Voter ID" onChange={voter}/></Col>
    <Col sm={4}><br></br></Col><Col sm={6}><br></br> </Col>
    
    <Col sm={4}><Form.Label><b>Vote FOR</b></Form.Label></Col><Col sm={6}><Form.Control onChange={votefor} as="select" size="lg">
    { PartyDet.map((details)=><option>{details.value}</option>)}
  </Form.Control></Col>
   
    <Col sm={4}><br></br></Col><Col sm={6}><br></br> </Col>
    <Col sm={4}><b>Upload AADHAR</b></Col><Col sm={6}><input type="file" onChange={handleNewImage}/></Col>

    <Col sm={4}><br></br></Col><Col sm={6}><br></br> </Col>
    <Col sm={4}></Col><Col sm={4}><Button variant="dark" onClick = {submit}>Vote</Button></Col>
  </Row>
 
  </Jumbotron>




  </div>); 
} 
  
export default Details;