import React from 'react';

const SearchBox =({seachFeild, searchChange}) => {
    return(
        <div className='pa3'>
            <input className ='pa3 ba  b--green b--lightest-blue'
            type='search'
            placeholder='Search robots bhai'
            onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;