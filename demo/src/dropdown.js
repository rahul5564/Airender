import React,{useState} from "react";
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Dropdown(){

    const [count, setCount] = useState("0");

   const ct = () => {
        setCount("2 ~ wins");
        console.log("hello");
    }
   const En = () => {
        setCount("1 ~ lose");
    }
   const Fr = () => {
        setCount("1 ~ win");
    }
    const Be = () => {
        setCount("0 ~ lose");
    }

    return(
        <>
        <div>
        <ul>
            <li>
            <a href="#">2018 FIFA World Cup SemiFinal</a>
            <ul>
                <li><a onClick={ct}>Croatia</a></li>
                <li><a onClick={En}>England</a></li>
                <li><a onClick={Fr}>France</a></li>
                <li><a onClick={Be}>Belgium</a></li>
            </ul>
            </li>
            <span id="score">Result : {count}</span>
            <Popup trigger={<button class="btn1">Help</button>} 
                    position="right center">
                    <p class="info">You can see the semi-Final scores upon Clicking the teams!</p>
            </Popup>
        </ul>
        </div>
        </>
    )
}

export default Dropdown;