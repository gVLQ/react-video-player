import React from 'react';
import PlaylisHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import Nightmode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = ({ videos, active, nightModeCallback, nightMode}) => {
    return (
        <StyledPlaylist>
            <Nightmode nightModeCallback={nightModeCallback} nightMode={nightMode} />
            <PlaylisHeader active={active} total={videos.length} />
            <PlaylistItems videos={videos} active={active} />
        </StyledPlaylist>
    )
}

export default Playlist; 