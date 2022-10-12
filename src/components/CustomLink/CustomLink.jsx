import React from 'react';
import { Link, useMatch } from 'react-router-dom'

const CustomLink = ({children, to}) => {
    const match = useMatch(to);

    return (
        <Link 
            to={to}
            style={{
                color: match ? '#FFFFFF' : '#728A96',
                background: match ? '#0088CC' : 'transparent',
                '--iconColor': match ? ' #FFFFFF' : ' #728A96'  
            }}
            className='nav__link'
        >
            {children}
        </Link>
    );
}

export default CustomLink;