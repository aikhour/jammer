import React, { useState, useCallback } from 'react';

export default function SearchBar({onSearch}) {
    const [term, setTerm] = useState('');
  
    const handleSetTerm = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        onSearch(term);
    }, [onSearch, term]);

    return (
        <div className="SearchBar">
            <input
                placeholder="Enter A Song Name"
                OnChange={handleSetTerm}
                type="text"/>
            <button className="SearchButton">
                Search
            </button>

            <h1>{term}</h1>
        </div>
    );
};
