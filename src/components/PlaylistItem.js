import React from 'react';
import StyledPlaylistItem from '../components/styles/StyledPlaylistItem';

const PlaylistItem = ({video, active, played}) => {
    return (
        <StyledPlaylistItem active={active} played={played}>
            <div className="vlq-player__video-nr">{video.num}</div>
            <div className="vlq-player__video-name">{video.title}</div>
            <div className="vlq-player__video-time">{video.duration}</div>
        </StyledPlaylistItem>
    )
}

export default PlaylistItem;