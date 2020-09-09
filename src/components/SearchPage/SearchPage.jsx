import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./../ChannelRow/ChannelRow";
import VideoRow from "./../VideoRow/VideoRow";
const SearchPage = () => {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneIcon></TuneIcon>
				<h2>Filter</h2>
			</div>
			<hr></hr>
			<ChannelRow
				channel="placeholderChannelName"
				image="https://picsum.photos/500/500"
				verified
				description="placeholderDesc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloribus eos magnam iure. Quo assumenda fugiat exercitationem vel libero, dolorem possimus totam aut delectus fugit magnam quidem! Deleniti, repellendus temporibus?"
				subs={Math.round(Math.random() * 1000000)}
				noOfVideos={Math.round(Math.random() * 1000)}
			></ChannelRow>
			<hr />
			<VideoRow
				views={`${Math.round(Math.random() * 1000000)}`}
				subs={`${Math.round(Math.random() * 1000000)}`}
				description="placeholderDescription"
				channel="placeholderChannelName"
				title="placeholderTitle"
				image="https://picsum.photos/1600/900"
				timestamp="placeholderTimestamp"
			></VideoRow>
			<VideoRow
				views={`${Math.round(Math.random() * 1000000)}`}
				subs={`${Math.round(Math.random() * 1000000)}`}
				description="placeholderDescription"
				channel="placeholderChannelName"
				title="placeholderTitle"
				image="https://picsum.photos/1600/900"
				timestamp="placeholderTimestamp"
			></VideoRow>
			<VideoRow
				views={`${Math.round(Math.random() * 1000000)}`}
				subs={`${Math.round(Math.random() * 1000000)}`}
				description="placeholderDescription"
				channel="placeholderChannelName"
				title="placeholderTitle"
				image="https://picsum.photos/1600/900"
				timestamp="placeholderTimestamp"
			></VideoRow>
			<VideoRow
				views={`${Math.round(Math.random() * 1000000)}`}
				subs={`${Math.round(Math.random() * 1000000)}`}
				description="placeholderDescription"
				channel="placeholderChannelName"
				title="placeholderTitle"
				image="https://picsum.photos/1600/900"
				timestamp="placeholderTimestamp"
			></VideoRow>
		</div>
	);
};

export default SearchPage;
