import React from 'react';
import Notifications from "../components/Notifications/Notifications";


const NotificationsPage = () => {
    return (
        <div className="wrapper__content">
            <Notifications heading={'Уведомления'} more={true}/>
        </div>
    );
}

export default NotificationsPage;