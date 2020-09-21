import { youtubeAPIKey } from "../youtubeAPI/youtubeAPIKey";
const axios = require("axios");
export const getHomeVideos = () =>
	axios
		.get(
			`https://www.googleapis.com/youtube/v3/search?maxResults=12&key=${youtubeAPIKey}`
		)
		.then((response) => response.data.items)
		.catch((error) => console.log("error", error));
