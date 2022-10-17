import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

const CustomTabs = (props) => {

    const TabPanels = [{title: 'Any content 1'}, {title: 'Any content 2'}]

    return (
        <div className="tabs">
            <Tabs>
                <TabList>
                    <Tab>{props.name}</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
        
                {TabPanels.map(element => {
                    return (<TabPanel key={element.index}><h2>{element.title}</h2></TabPanel>)
                })}
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default CustomTabs;