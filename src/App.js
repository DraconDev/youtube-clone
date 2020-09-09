import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* //? Header always showing */}
				<Header></Header>

				<Switch>
					{/* <Route path="/search">
						<h1>Homepage</h1>
					</Route> */}
					<Route path="/search/:searchTerm">
						<div className="app__page">
							<Sidebar className="app__sidebar"></Sidebar>
							<SearchPage></SearchPage>
						</div>
					</Route>
					<Route path="/">
						<div className="app__page">
							<Sidebar className="app__sidebar"></Sidebar>
							<RecommendedVideos></RecommendedVideos>
						</div>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
