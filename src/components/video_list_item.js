import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video; above curly brace video is the same as this line ES6

	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;