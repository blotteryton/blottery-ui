import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const CollectionsList = (obj) => {
    return (
        obj.results.map(collection => (
            <CustomLink to={'/marketplace/collections/' + collection.id + '/'} className="notification-list__item" key={collection.id + collection.name}>
                <div className="notification-list__block">
                    <picture className="notification-list__img">
                        <img src={collection.image} alt="Collection" />
                    </picture>
                    <div className="notification-list__group">
                        <span className="notification-list__name">{collection.name}</span>
                        <span className="notification-list__help">Floor Price: {collection.floor_price} TON</span>
                    </div>
                </div>
            </CustomLink>
        ))
    );
}

export default CollectionsList;