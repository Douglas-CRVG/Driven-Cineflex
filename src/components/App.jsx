import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/reset.css";
import "./app.css";
import Finish from "./finish/Finish";
import Home from "./home/Home";
import Header from "./others/header/Header";
import Seats from "./seats/Seats";
import Sessions from "./sessions/Sessions";

export default function App(){
	const [buyer, setBuyer] = useState({});

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sessoes/:idFilme" element={<Sessions />} />
				<Route path="/assentos/:idSessao" element={<Seats buyer={buyer} setBuyer={setBuyer} />} />
				<Route path="/finalizar" element={<Finish />} />
			</Routes>
		</BrowserRouter>
	);
}