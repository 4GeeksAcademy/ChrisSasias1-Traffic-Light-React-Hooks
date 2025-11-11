import React from "react";
import { TrafficLight } from "./TrafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center bg-success text-light d-flex justify-content-center align-item-center vh-100">
			
			<TrafficLight/>

		</div>
	);
};

export default Home;