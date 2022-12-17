import React,{ useState } from "react";
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Txt(){

    const [count, setCount] = useState("");
     
    function handleChange(event) {
        console.log(event.target.value);
        setCount(event.target.value);
      } 

    return(
        <>
        <div class="grid">
        
        <input class="inp" name="firstName" placeholder="Texthere... " onChange={handleChange} />   
        <Popup trigger={<button class="btn1">Help</button>} 
                    position="right center">
                    <p class="info">You'll get a new text side upon typing on this!</p>
         </Popup>
        <h2 class="inp1"> {count}</h2> 
        </div>
        <br/>
        </>
    )
}

export default Txt;