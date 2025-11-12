import React, { useState } from "react";
import '../../styles/index.css'

export const TrafficLight = () => {

    let [light, setLight] = useState("yellow")
    let [color, setColor] = useState("");


    return (
        <div className="container center" >

            <div className="top"></div>

            <div className="trafficLigth">
                <div id="red" className={` circle ${color == "red" ? "effect" : "bg-dark"}`} onClick={() => setColor("red")}></div>
                <div id="yellow" className={` circle ${color == "yellow" ? "effect" : "bg-dark"}`} onClick={() => setColor("yellow")}></div>
                <div id="green" className={` circle ${color == "green" ? "effect" : "bg-dark"}`} onClick={() => setColor("green")}></div>

            </div>
        </div>

    )


}