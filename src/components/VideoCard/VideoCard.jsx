import React from "react";
import { Avatar } from "@material-ui/core";
import start from "./../YoutubAPI/APIrequest/APIrequest";
import "./VideoCard.css";

const VideoCard = (props) => {
	const { image, title, channel, views, timestamp, channelImage } = props;
	// start();
	return (
		<div className="videoCard">
			{/* <h4>Video</h4> */}
			<img src={image} alt="videoImage" className="videoCard__thumbnail" />
			<div className="videoCard__info">
				<Avatar className="videoCard__avatar" src={channelImage}></Avatar>
				<div className="videoCard__text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} · {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
