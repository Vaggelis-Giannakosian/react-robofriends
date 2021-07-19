import React, {ChangeEvent} from 'react'

export type ISearchCallback =  (event: ChangeEvent<HTMLInputElement>) => void;

const SearchBox: React.FC<{searchChange:ISearchCallback}> = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input className="pa3 ba b--green bg-lightest-blue"
                   aria-label="Search Robots"
                   type="search"
                   onChange={searchChange}
                   placeholder="search for robots "/>
        </div>
    );
}


export default React.memo(SearchBox);
