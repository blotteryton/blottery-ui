import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({to, className, disabled, children}) => {
    return (
        <NavLink 
            to={to}
            className={className}
            data-disabled={ disabled ? false : true }
        >
            {children}
        </NavLink>
    );
}

export default CustomLink;