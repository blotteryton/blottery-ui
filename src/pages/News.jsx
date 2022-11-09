import React from 'react';
import Notifications from "../components/Notifications/Notifications";


const News = () => {
    return (
        <div className="wrapper__content">
            <Notifications heading={"Новости"} more={true}/>
        </div>
    );
}

export default News;