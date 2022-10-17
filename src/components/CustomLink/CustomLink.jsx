import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({to, className, children}) => {
    return (
        <NavLink 
            to={to}
            className={className}
        >
            {children}
        </NavLink>
    );
}

export default CustomLink;