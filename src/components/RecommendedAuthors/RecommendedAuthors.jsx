import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import './RecommendedAuthors.scss';

const RecommendedAuthors = ({recommends, slug}) => {
    return (
        <div className="recommended-authors">
            {recommends.recommended_authors.map(author => (
                <CustomLink to={'/marketplace/authors/' + author.id + '/'} className="recommended-authors__item" key={slug + author.id}>
                    <picture className="recommended-authors__img">
                        <img src={author.avatar} alt="Ava" />
                    </picture>
                    <span className="recommended-authors__name">{author.first_name} {author.last_name}</span>
                </CustomLink>
            ))}
        </div>
    );
}

export default RecommendedAuthors;