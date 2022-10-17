import React from 'react';

import './Heading.scss';

const Heading = (props) => {
    return (
        <div className="page-heading">
            { props.title ? 
                <h1 className="page-heading__title">{props.title}</h1>
                :
                null
            }
            { props.subtitle ? 
                <h2 className="page-heading__subtitle">{props.subtitle}</h2>
                :
                null
            }
        </div>
    );
}

export default Heading;