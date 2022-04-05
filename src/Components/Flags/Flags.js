import React, { useEffect, useState } from "react";
import Flag from "../Flag/Flag";
import "./Flags.css";

const Flags = () => {
	const [flags, setFlags] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setFlags(data)); //asynchronous
	}, []);

	return (
		<div className="container">
			<h1>All Countires Flags!!!</h1>
			<hr />
			<input type="text" placeholder="Search Country" />
			<h4>Total Country: {flags.length}</h4>
			<div className="flags-container">
				{flags.map((flag) => (
					<Flag flag={flag}></Flag>
				))}
			</div>
		</div>
	);
};

export default Flags;
