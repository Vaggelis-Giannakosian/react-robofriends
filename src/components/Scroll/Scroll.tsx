import * as React from 'react'

interface IScrollProps {
    children?: JSX.Element
}

const Scroll: React.FC<IScrollProps> = ({children}) =>{

    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '700px'}}>
            {children}
        </div>
    );

}

export default Scroll
