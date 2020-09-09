import React from "react";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./ChannelRow.css";

const ChannelRow = (props) => {
	const { channel, image, verified, description, subs, noOfVideos } = props;
	return (
		<div className="channelRow">
			<Avatar className="channelRow__logo" alt={channel} src={image}></Avatar>
			<div className="channelRow__text">
				<h4>
					{channel}
					{verified && <CheckCircleOutlineIcon></CheckCircleOutlineIcon>}
				</h4>
				<p>
					{subs} subscribers · {noOfVideos} videos
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ChannelRow;
