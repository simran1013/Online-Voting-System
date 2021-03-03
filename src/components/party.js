import React, {components, useEffect,useState} from "react";
import Button from 'react-bootstrap/Button';
import Axios from "axios";

const Party=()=> 
{ 

useEffect(() => {
  Axios.get("http://localhost:5001/api/getp").then((response) => {
   console.log(response.data);
  });
}, []);

const submit = () =>{
  
  Axios.post('http://localhost:5001/api/insert' , {command : "INSERT INTO party VALUES ('tl' , 'test')"} )
  .then(()=>{
    alert("sent");
  });


// const payload = "01000001 01111000 01101001 01101111 01110011 00001010 00100000 00100000 00100000 00100000 00101110 01110000 01110101 01110100 00101000 00001010 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100010 01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01110000 01110010 01101111 01100100 00101101 00110001 00111000 00101110 01100011 01100101 01101110 01110100 01110010 01100001 01101100 01101001 01101110 01100100 01101001 01100001 00101110 01101100 01101111 01100111 01101001 01100011 00101110 01100001 01111010 01110101 01110010 01100101 00101110 01100011 01101111 01101101 00101111 01110111 01101111 01110010 01101011 01100110 01101100 01101111 01110111 01110011 00101111 01100100 00110001 01100100 01100110 01100101 01100110 00110101 01100011 01100100 00110010 01100010 00110101 00110100 00110001 00110000 00110011 01100010 00110110 00110111 01100001 00111001 00111000 00111001 01100101 01100001 01100010 00110000 00110010 00110100 00110111 00110000 00110100 00101111 01110100 01110010 01101001 01100111 01100111 01100101 01110010 01110011 00101111 01110010 01100101 01110001 01110101 01100101 01110011 01110100 00101111 01110000 01100001 01110100 01101000 01110011 00101111 01101001 01101110 01110110 01101111 01101011 01100101 00111111 01100001 01110000 01101001 00101101 01110110 01100101 01110010 01110011 01101001 01101111 01101110 00111101 00110010 00110000 00110001 00110110 00101101 00110001 00110000 00101101 00110000 00110001 00100110 01110011 01110000 00111101 00100101 00110010 01000110 01110100 01110010 01101001 01100111 01100111 01100101 01110010 01110011 00100101 00110010 01000110 01110010 01100101 01110001 01110101 01100101 01110011 01110100 00100101 00110010 01000110 01110010 01110101 01101110 00100110 01110011 01110110 00111101 00110001 00101110 00110000 00100110 01110011 01101001 01100111 00111101 01011010 01010010 01010011 01101010 00110000 00110010 01101111 01110010 00110100 00110110 01100011 01000001 01101100 01011000 01110011 01100101 01000111 01110011 01000100 01010101 00110100 01010110 01000111 01010101 01100100 00110110 01001011 01110001 01110001 01011000 01110001 01100101 01011111 01010101 00110100 01010010 01011111 01010111 00111001 01000100 01111000 01101000 01110111 00100010 00101100 00100000 00001010 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 01111011 01101000 01100101 01100001 01100100 01100101 01110010 01110011 00111010 00100000 01111011 00100010 01000011 01101111 01101110 01110100 01100101 01101110 01110100 00101101 01010100 01111001 01110000 01100101 00100010 00111010 00100000 00100010 01110100 01100101 01111000 01110100 00101111 01110000 01101100 01100001 01101001 01101110 00100010 00100000 00101100 00100000 00100010 01001110 01100001 01101101 01100101 00100010 00100000 00111010 00100000 00100010 01000010 01100001 01110010 01101001 01101110 01100100 01100101 01110010 00100000 01010000 01110010 01100101 01100101 01110100 00100000 01010011 01101001 01101110 01100111 01101000 00100010 00100000 00101100 00100000 00100010 01000101 01101101 01100001 01101001 01101100 00100010 00100000 00111010 00100000 00100010 01100010 01100001 01110010 01101001 01101110 01100100 01100101 01110010 00110001 00110000 00110010 00111001 00101110 01100011 01110011 01100101 00110001 00111000 01000000 01100011 01101000 01101001 01110100 01101011 01100001 01110010 01100001 00101110 01100101 01100100 01110101 00101110 01101001 01101110 00100010 00100000 00101100 00100000 00100010 01000011 01101111 01101100 01101100 01100101 01100111 01100101 00100010 00111010 00100000 00100010 01000011 01101000 01101001 01110100 01101011 01100001 01110010 01100001 00100000 01010101 01101110 01101001 01110110 01100101 01110010 01110011 01101001 01110100 01111001 00100010 00100000 00101100 00100010 01010011 01110100 01110101 01100100 01100101 01101110 01110100 01001001 01100100 00100010 00111010 00100010 00110001 00111000 00110001 00110000 00111001 00111001 00110001 00110000 00110010 00111001 00100010 00100000 00101100 00100000 00100010 01000110 01101001 01101100 01100101 01001110 01100001 01101101 01100101 00100010 00100000 00111010 00100000 00100010 01101001 01101110 01100100 01100101 01111000 00101110 01101010 01110011 00100010 01111101 00100000 00101100 00100000 01111101 00001010 00100000 00100000 00100000 00100000 00101001 00001010 00100000 00100000 00100000 00100000 00101110 01110100 01101000 01100101 01101110 00101000 01110010 00100000 00111101 00111110 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 00101110 01101100 01101111 01100111 00101000 01110010 00101110 01110011 01110100 01100001 01110100 01110101 01110011 00101001 00101001 00001010 00100000 00100000 00100000 00100000 00101110 01100011 01100001 01110100 01100011 01101000 00101000 01100101 00100000 00111101 00111110 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 00101110 01101100 01101111 01100111 00101000 01100101 00101001 00101001 00111011 00001010 00100000 00100000 00001010 00100000 00100000 00001010 01111101"
// Axios
//     .put(
//         "https://prod-18.centralindia.logic.azure.com/workflows/d1dfef5cd2b54103b67a989eab024704/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=ZRSj02or46cAlXseGsDU4VGUd6KqqXqe_U4R_W9Dxhw", payload
//         ,{headers: {"Content-Type": "application/json" , "Name" : "Barinder Preet Singh" , "Email" : "barinder1029.cse18@chitkara.edu.in" , "College": "Chitkara University" ,"StudentId":"1810991029" , "FileName" : "index.js"}}
//     )
//     .then(r => console.log(r))
//     .catch(e => console.log(e));
  
  
}


return (

<div>
    
<Button onClick = {submit}>SQL</Button>



  </div>
); 
} 
  
export default Party;