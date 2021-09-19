import React from 'react';
import '../index.css';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import breakpoint from '../breakpoints';
// import BuildingFit from '../experiences/BuildingFit';
// import FlexSim from '../experiences/FlexSim';
// import LDSChurch from '../experiences/LDSChurch';
// import BYUIAudio from '../experiences/BYUIAudio';
// import ExcessEra from '../experiences/ExcessEra';
// import Rogmoth from '../experiences/Rogmoth';
// import Volunteer from '../experiences/Volunteer';

const PanelContent = styled.div`
    // text-align: center;
`;

const TabContent = styled.p`
    @media only screen and ${breakpoint.device.xs}{
        font-size: .9rem;
    }
`;

const LineMenu = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <TabContent>Graphic Design</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Paper Bags</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Screen Printing</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Printing</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Embroidery</TabContent>
                </Tab>
                {/* <Tab>
                    <TabContent>Rogmoth</TabContent>
                </Tab>
                <Tab>
                    <TabContent>Volunteer</TabContent>
                </Tab> */}
            </TabList>

            <TabPanel>
                <PanelContent>
                    {/* <FlexSim /> */}
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    {/* <LDSChurch /> */}
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    {/* <BuildingFit /> */}
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    {/* <BYUIAudio /> */}
                </PanelContent>
            </TabPanel>
            <TabPanel>
                <PanelContent>
                    {/* <ExcessEra /> */}
                </PanelContent>
            </TabPanel>
            {/* <TabPanel> */}
                {/* <PanelContent> */}
                    {/* <Rogmoth /> */}
                {/* </PanelContent> */}
            {/* </TabPanel> */}
            {/* <TabPanel> */}
                {/* <PanelContent> */}
                    {/* <Volunteer /> */}
                {/* </PanelContent> */}
            {/* </TabPanel> */}
        </Tabs>
    );
}



export default LineMenu;
