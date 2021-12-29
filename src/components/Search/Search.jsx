import React from 'react'
import './Search.scss';
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div className='search container'>
            <h1 className="search-p col-form-label">Search by #</h1>
            <div className="input-group search-bar">
                <input type="text"  className="inpt" />
                <FaSearch size="1.85em" color="#FFFFFF" className="loop" />
            </div>
        </div>
    )
}

export default Search
