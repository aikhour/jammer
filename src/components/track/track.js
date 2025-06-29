import React from 'react';

export default function Track({track, key}) {
    return (
        <li><div className='Track'>
            <h4>{track}</h4>
            <p>key: {key}</p>
            <button>Add</button>
        </div></li>
    )
}