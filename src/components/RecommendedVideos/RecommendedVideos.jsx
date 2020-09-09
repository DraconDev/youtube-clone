import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./../VideoCard/VideoCard";
import VideoCardList from "./../VideoCardList/VideoCardList";

const RecommendedVideos = () => {
	return (
		<div className="recommendedVideos">
			{/* <h2>Recommended</h2> */}
			<div className="recommendedVideos__videos">
				<VideoCardList></VideoCardList>
			</div>
		</div>
	);
};

export default RecommendedVideos;
