import React, {components, useEffect,useState} from "react";
import Button from 'react-bootstrap/Button';
import Party from './party';

const Dash=()=> 
{ 

const [img , imgchange] = useState("Empty");
var str = "";
var sha256 = require('js-sha256').sha256;

useEffect(() => {

  
}, [])

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


  return <div>
    
<Button>hello</Button>
<input type="file" onChange={handleNewImage}/>
<Party/>

  </div>; 
} 
  
export default Dash;