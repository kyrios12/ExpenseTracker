import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import debounce from 'lodash/debounce'; // Import debounce function from lodash
import "../Styles/search.css";

const Search = (props) => {
    const { state, dispatch } = props;
    const [toggle, setToggle] = useState(false);
    const [name, setName] = useState('');

    const debouncedSearch = debounce((searchQuery) => {
        dispatch({ type: 'SEARCH_EXPENSES', payload: searchQuery.toLowerCase() });
    }, 300);

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        setName(searchQuery);
        // Call the debounced function with the search query
        debouncedSearch(searchQuery);
    };

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const clearSearch = () => {
        setName(''); // Clear the search input
        dispatch({ type: 'CLEAR_SEARCH', payload: state.expenses });
    };

    return (
        <div className='searchContainer'>
            <Form.Control
                className={toggle ? "" : "disable"}
                value={name}
                placeholder='Search by name'
                onChange={handleSearch}
            />
            <Button variant="primary" onClick={handleToggle}>Search</Button>
            <Button variant="secondary" type='clear' onClick={clearSearch}>Clear</Button>
        </div>
    );
};

export default Search;
