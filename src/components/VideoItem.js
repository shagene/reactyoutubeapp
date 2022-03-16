import React from "react";
import  './VideoItem.css';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from "@mui/material/Box";

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <Box >
            <ImageListItem key={video.id.videoId} className="show-cursor" onClick={() => onVideoSelect(video)}>
                <img
                    src={`${video.snippet.thumbnails.medium.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${video.snippet.thumbnails.medium.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={video.snippet.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={video.snippet.title}
                    subtitle={video.snippet.channelTitle}
                    // subtitle={video.snippet.description}
                />
            </ImageListItem>
        </Box>
    );
};

export default VideoItem;