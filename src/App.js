import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<div className="app__page">
				<Sidebar></Sidebar>
				<RecommendedVideos></RecommendedVideos>
			</div>
		</div>
	);
}

export default App;
