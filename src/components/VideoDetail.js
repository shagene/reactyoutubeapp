import React from "react";
import {Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

const VideoDetail = ({video}) => {
    if (!video) {
        return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <Box

        >

            <Paper elevation={24} >
                <iframe src={videoSrc} width="100%" height="425"
                        title={video.snippet.title} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <Typography variant="h4" component="h2">
                    {video.snippet.title}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                    {video.snippet.description}
                </Typography>
            </Paper>
        </Box>
    );
};

export default VideoDetail;