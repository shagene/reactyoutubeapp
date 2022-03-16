import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from '../apis/youtube';
import VideoDetail from "./VideoDetail";
import Box from "@mui/material/Box";


class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onTermSubmit('Create React App');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Container>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <VideoDetail video={this.state.selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
              </Grid>
            </Grid>
          </Container>
        </Box>

    );
  }
}

export default App;