import React from "react";
import VideoCard from "./../VideoCard/VideoCard";

const videoList = [];

// mocking the Youtube API to corrently style videos
for (let i = 0; i < 12; i++) {
	videoList.push(
		<VideoCard
			image={`https://picsum.photos/1600/900?random=${i}`}
			views={`${Math.round(Math.random() * 1000000) + 1} views`}
			timestamp=""
			title="PlaceHolder"
			channelImage={`https://picsum.photos/1600/900?random=${100 + i}`}
			channel="PlaceHolder Channel Name"
		></VideoCard>
	);
}

const VideoCardList = () => {
	return <React.Fragment>{videoList}</React.Fragment>;
};

export default VideoCardList;
