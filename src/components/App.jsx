import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/reset.css";
import "./app.css";
import Home from "./home/Home";
import Header from "./others/header/Header";

export default function App(){
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}