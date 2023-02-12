import React, {useEffect, useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const Search = ({search}) => {

    const [input, setInput] = useState('')

    let textInput = React.createRef()

    const showInput =()=> {
        setInput(textInput.current.value)
    }

    useEffect(()=> {
        localStorage.setItem('text',JSON.stringify(input))
    }, [input])

    return (
        <div className='search-block' style={{
            top: !search ? '-1000px' : '130px'
        }}>
            <div className='search-block--search'>
                <input onInput={showInput} ref={textInput} type="text"/>
                <NavLink className='search-block--search__icon' to={'/searcher'}>
                    <BsSearch/>
                </NavLink>

            </div>
        </div>
    );
};

export default Search;