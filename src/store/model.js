import { thunk, action } from 'easy-peasy';
import Axios from 'axios';

const podcastModel = {
        podcastData: [],
        playing: false,
        pause: false,
        play: false,
        selectedIndex: null,
        selectIndex: action((state, index) => {
            state.selectedIndex = index;
        }),
        addPodcastData: action((state, payload) => {
            state.podcastData = payload;
        }),
        fetchPodcast: thunk(async(actions, payload) => {
            Axios.get('https://nepalcorona.info/api/v1/podcasts').then(res => {
                actions.addPodcastData(res.data.data)
            }).catch(err => {
                console.log(err);
            })
        }),
}

const uiElement = {
    showHeader: true,
}
 export { podcastModel, uiElement };