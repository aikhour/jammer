import React, { useState } from 'react';

function SearchBarContainer() {
    const [text, setText] = useState('');
  
    function handleSetText(e) {
        setText(e.target.value);
    }

    return (
        <>
        <label for='searchBar'>Search Songs By Title</label>
        <input type='text' id='searchBar' name='searchBar' value={text} onChange={handleSetText}></input>
        <h1>{text}</h1>
        </>
    )
};

export default SearchBarContainer;