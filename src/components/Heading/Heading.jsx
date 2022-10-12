import React from 'react';

import './Heading.scss';

const Heading = (props) => {
    return (
        <div className='page-heading'>
            <h1 className="page-heading__title">{props.title}</h1>
        </div>
    );
}

export default Heading;