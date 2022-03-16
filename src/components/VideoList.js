import React from "react";
import ImageList from '@mui/material/ImageList';

import VideoItem from "./VideoItem";
import Box from "@mui/material/Box";

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });
    return <Box>
        <ImageList sx={{ width: 500, }}>
            {renderedList}
        </ImageList>

    </Box>;
};

export default VideoList;

// <ImageList sx={{ width: 500, height: 450 }}>

// </ImageList>