import React, { useState, useEffect, useCallback } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { Logo } from "../../Assets/youtube-icon-logo-transparent-youtube-11553542027nec8a4iwhh.png";

const Header = () => {
	let history = useHistory();
	// const searchWithEnter = (e) => {
	// 	if (e.keyCode === 13) {
	// 		console.log("test");
	// 		// return (
	// 		// <Link to={`/search${inputSearch}`}>
	// 		// 	<SearchIcon className="header__inputButton"></SearchIcon>
	// 		// </Link>
	// 		// );
	// 	}
	// };

	const [inputSearch, setInputSearch] = useState("");

	// useEffect(() => {
	// 	document.addEventListener("search", searchWithEnter);
	// 	// return () => {
	// 	// 	searchWithEnter();
	// 	// };
	// }, []);

	const search = useCallback(() => {
		inputSearch && history.push(`/search/${inputSearch}`);
	});

	useEffect(() => {
		const handleKeyUp = (e) => {
			if (e.keyCode === 13) {
				search();
				// console.log("test");
				//? back to home
				// history.push(`/`);
				//? to search page
				// history.push(`/search/results?search_query=${inputSearch}`);
				// <Link to={`/search${inputSearch}`}>
				// 	<SearchIcon className="header__inputButton"></SearchIcon>
				// </Link>
			}
		};

		window.document.addEventListener("keyup", handleKeyUp);

		return () => {
			window.document.removeEventListener("keyup", handleKeyUp);
		};
	}, [history, inputSearch, search]);

	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon></MenuIcon>
				<Link to={`/`}>
					<img
						className="header__logo"
						// src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.pnghttps://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
						src="https://www.iconfinder.com/data/icons/social-icons-33/128/Youtube-128.png"
						// src={
						// 	"https://w7.pngwing.com/pngs/936/468/png-transparent-youtube-logo-youtube-logo-computer-icons-subscribe-angle-rectangle-airplane.png"
						// }
						// src="https://w7.pngwing.com/pngs/936/468/png-transparent-youtube-logo-youtube-logo-computer-icons-subscribe-angle-rectangle-airplane.png"
						alt="youtube"
					/>
				</Link>
			</div>
			<div className="header__input">
				<input
					onChange={(e) => setInputSearch(e.target.value)}
					value={inputSearch}
					type="text"
					placeholder="Search"
				/>
				{/* <Link to={`/search${inputSearch}`}> */}
				<SearchIcon
					onClick={() => search()}
					className="header__inputButton"
				></SearchIcon>
				{/* </Link> */}
			</div>
			<div className="header__icons">
				<VideoCallIcon className="header__icon"></VideoCallIcon>
				<AppsIcon className="header__icon"></AppsIcon>
				<NotificationsIcon className="header__icon"></NotificationsIcon>
				<Avatar
					alt="ProfilePicture"
					src="https://avatars2.githubusercontent.com/u/6221294?s=460&u=a5e0eeda663efe02302671ecf857999f27697eaf&v=4"
				></Avatar>
			</div>
		</div>
	);
};

export default Header;
