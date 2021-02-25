import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import youtubeAPI from './api/youtubeAPI'
import Videoplayer from './components/VideoPlayer'
import VideoList from './components/VideoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videosMetaInfo: [],
      selectedVideoId: null,
      videoTitle:'',
      videoChannel:''
    };
  }
onVideoSelected = (Id, title) => {
  this.setState({
    selectedVideoId:Id,
    videoTitle:title
  })
}
onSearch = async keyword =>{
 const response = await youtubeAPI.get('/search', {
    params: {
      q: keyword
    }
 })
 
 this.setState({
   videosMetaInfo: response.data.items,
   selectedVideoId: response.data.items[0].id.videoId,
   videoTitle:response.data.items[0].snippet.title,
   videoChannel:response.data.items[0].snippet.channel
 })
}



  render() {
    return (
      <div className="App">
            <Search onSearch={(keyword) => this.onSearch(keyword)}/>
            <VideoList
                onVideoSelected={(Id,title) => this.onVideoSelected(Id,title)}
                data={this.state.videosMetaInfo}
            />
            <Videoplayer 
                videoId={this.state.selectedVideoId} 
                title={this.state.videoTitle}
                channel={this.state.videoChannel}
            />
      </div>
    );
  }
}

export default App;
