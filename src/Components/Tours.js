import React from "react";
import Card from "./Card";

function Tours({tours,removeTourHandler}){
    return (
        <div className="container">
            <div>
                <h2 className="title">
                    Let's Plan it 
                </h2>
            </div>
            <div className="cards" >
                {
                    tours.map((tour) =>{
                        return (
                            <Card 
                                {...tour}         // tour object ki copy paas krdi 
                                key={tour.id}    
                                removeTourHandler={removeTourHandler}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Tours;