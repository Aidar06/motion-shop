import React from 'react';
import {BsSearch} from "react-icons/bs";

const Search = ({search}) => {
    return (
        <div className='search-block' style={{
            top: !search ? '-1000px' : '130px'
        }}>
            <div className='search-block--search'>
                <input type="text"/>
                <BsSearch className='search-block--search__icon'/>
            </div>
        </div>
    );
};

export default Search;