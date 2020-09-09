import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon></MenuIcon>
				<img
					className="header__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
					alt="youtube"
				/>
			</div>
			<div className="header__input">
				<input type="text" placeholder="Search" />
				<SearchIcon className="header__inputButton"></SearchIcon>
			</div>
			<div className="header__icons">
				<VideoLabelIcon className="header__icon"></VideoLabelIcon>
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
