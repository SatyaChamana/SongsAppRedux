import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    return <div>
        <h1>{song ? "Song Details" : "Select a Song"}</h1>
        <div> {song ? song.title : null}</div>
        <div> {song ? song.duration : null}</div>

    </div>;
}

const mapStateToProps = (state) => {
    return{ song : state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);