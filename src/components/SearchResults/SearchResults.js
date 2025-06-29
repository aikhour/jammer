import React from 'react';

import Tracklist from '../TrackList/TrackList';

export default function SearchResults({searchResults}) {

    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={searchResults}/>
        </div>
    )
}