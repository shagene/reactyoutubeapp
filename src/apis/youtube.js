import axios from  'axios';

const KEY = 'AIzaSyBAom_yvfXYpEt4vUlP88J2zUTSfouu9cQ';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});