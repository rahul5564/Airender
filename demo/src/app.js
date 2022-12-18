import React,{ Component } from "react";
import axios from "axios";
import Txt from "./txt";
import Dynamictext from "./dynamic";
import Dropdown from "./dropdown";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const  API_URL = "http://api.quotable.io/random";


class App extends Component{
    constructor(){
        super();
        this.state = {
            quote : "",
        }
    }

    api = async() => {
        try{
       const resp = await axios(API_URL);
       const data = await resp.data.content;
       console.log(data);
    //    this.setState({quote : data});
        }catch(err){
            console.log(err);
        }
    }
       // .then( resp => {
        //     console.log(resp.data.content);
        //     this.setState({quote : resp.data.content});
        //     return resp.data;
        // })

   hoverHandler = () => {
        console.log("onMouseEnter")
      }
    render(){
        return(
            <div>
                <h1 id="heading">Quote Of The Day!</h1>
                   <p>Hello</p>

                <button class="btn" onClick={() => this.api()}>Click for a quote  </button>
                <Popup trigger={<button class="btn1">Help</button>} 
                    position="right center">
                    <p class="info">Upon clicking this button you'll get a new Quote Displayed Below!</p>
                    </Popup>
                
                <p id="quote">{this.state.quote}</p>
                <Dropdown/>
                <Txt/>
                <Dynamictext/>
            </div>
        )
    }
}

export default App;