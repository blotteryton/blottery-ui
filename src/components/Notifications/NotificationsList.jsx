import React from 'react';

const NotificationsList = ({obj}) => {
    const iter = obj.results ? obj.results : obj;
    return (
        iter.map(notification => (
            <div className="notification-list__item" key={`${notification.category}_${notification.id}`}>
                <div className="notification-list__block">
                    <picture className="notification-list__img">
                        <img src={notification.image} alt="Notification object" />
                    </picture>
                    <div className="notification-list__group">
                        <span className="notification-list__name">{notification.header}</span>
                        <span className="notification-list__help">{notification.description}</span>
                    </div>
                </div>
            </div>
        ))
    );
}

export default NotificationsList;