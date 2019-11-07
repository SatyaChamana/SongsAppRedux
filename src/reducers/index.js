import { combineReducers } from 'redux';

 const songsReducer = () => {
    return [
        {title : 'No Scrubs', duration: '4:30'},
        {title : 'Macarena', duration: '2:30'},
        {title : 'All Stars', duration: '4:30'},
        {title : 'I Want it that way', duration: '1:30'}
    ]
};

 const selectedSongReducer = (selectedSong=null,action) =>{
    if(action.type == 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});