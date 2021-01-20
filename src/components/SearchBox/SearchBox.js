import React from 'react'

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input className="pa3 ba b--green bg-lightest-blue"
                   aria-label="Search Robots"
                   type="search"
                   onChange={searchChange}
                   placeholder="search robots "/>
        </div>
    );
}


export default React.memo(SearchBox);