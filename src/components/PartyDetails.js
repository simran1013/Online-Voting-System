import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Detail.css';
import PartyDet from './PartyDetail.json';

class PartyDetails extends React.Component {
      render(){
          return(
              <div><br></br><br></br><br></br><br></br><br></br>
                  <table>
                 
                 { PartyDet.map((details)=>
                
        
                         <tr>
                             <Jumbotron >
                           
                       <td className="dettext">
                       <h1>{details.value}</h1>
                       <p></p>
                           {details.text}</td>
                      
                       <td className ="image"><img src={details.picture} /></td>
                       </Jumbotron>
                 </tr>
              
            
                 )}
 
 </table>
              </div>
          );
      }
  }
export default PartyDetails;