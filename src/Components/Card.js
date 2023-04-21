import React, { useState } from "react";
import Tours from "./Tours";
import data from "../data";
function Card(props){
    const [Readmore,setReadMore] = useState(false)
    const description = Readmore ? props.info:`${props.info.substring(0,200)+" ... "}`

    function ReadmoreHandler(){
        setReadMore(!Readmore);
    }

    return (
        <div className="card">
            <img src={props.image} className="image"/> 
            <div className="tour-info">
                    <div className="tour-details">
                        <h4 className="tour-price"> ₹ {props.price}   </h4>        
                        <h4 className="tour-name"> {props.name}   </h4>        
                    </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={ReadmoreHandler}>
                        {Readmore ? 'Show Less':'Read More'} 
                    </span>
                </div>
            </div>
            <button onClick={()=>props.removeTourHandler(props.id)} className="btn-red">
                Not Interested 
            </button>
        </div>
    )
}
export default Card;
