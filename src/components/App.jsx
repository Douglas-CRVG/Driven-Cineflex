import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/reset.css";
import "./app.css";
import Home from "./home/Home";
import Header from "./others/header/Header";
import Sessions from "./sessions/Sessions";

export default function App(){
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sessoes/:idFilme" element={<Sessions />}/>
			</Routes>
		</BrowserRouter>
	);
}