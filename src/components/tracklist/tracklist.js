import React from 'react';
import Track from '../Track/Track';
export default function Tracklist({tracks}) {


    return (
        <div className="TrackList">
            <ul>
            {tracks.map((track) => {
                return (
                    <Track 
                        track={track.name}
                        key={track.key} 
                    />
                )
            })}
            </ul>
        </div>
    )
}