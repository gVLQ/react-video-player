import React from 'react';
import PlaylisHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import Nightmode from '../Nightmode';

const Playlist = props => {
    return (
        <>
            <Nightmode />
            <PlaylisHeader />
            <PlaylistItems />
        </>
    )
}

export default Playlist;