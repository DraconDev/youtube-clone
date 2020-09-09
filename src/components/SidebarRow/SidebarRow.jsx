import React from "react";
import "./SidebarRow.css";

const SidebarRow = (props) => {
	const { title, Icon, selected } = props;
	console.log("props", props);
	return (
		<div className={`sidebarRow ${selected && "selected"}`}>
			<Icon className="sidebarRow__icon"></Icon>
			<h1 className="sidebarRow__title">{title}</h1>
		</div>
	);
};

export default SidebarRow;
