import React from "react";
import "./Sidebar.css";
import SidebarRow from "./../SidebarRow/SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Sidebar = () => {
	return (
		<div className="sidebar">
			<SidebarRow selected Icon={HomeIcon} title="Home"></SidebarRow>
			<SidebarRow Icon={TrendingUpIcon} title="Trending"></SidebarRow>
			<SidebarRow Icon={SubscriptionsIcon} title="Subscription"></SidebarRow>
			<hr />
			<SidebarRow Icon={VideoLibraryIcon} title="Library"></SidebarRow>
			<SidebarRow Icon={HistoryIcon} title="History"></SidebarRow>
			<SidebarRow Icon={OndemandVideoIcon} title="Your Videos"></SidebarRow>
			<SidebarRow Icon={WatchLaterIcon} title="Watch Later"></SidebarRow>
			<SidebarRow Icon={ThumbUpAltIcon} title="Liked videos"></SidebarRow>
			<SidebarRow Icon={ExpandMoreIcon} title="Show More"></SidebarRow>
			<hr />
		</div>
	);
};

export default Sidebar;
