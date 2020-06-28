import { createStore } from 'easy-peasy';
import { podcastModel, uiElement } from './model';

const storeModel = {
    podcasts: podcastModel,
    ui: uiElement,
}

const store = createStore(storeModel);


export default store;