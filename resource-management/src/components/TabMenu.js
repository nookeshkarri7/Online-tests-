import React from 'react'
import { TabMenuDiv, TabMenuMainDiv, TabMenuP } from './StyledComponents'
import { useSelector } from 'react-redux';

const TabMenu = () => {
    const tabs = useSelector(({ adminReducer }) => adminReducer.tabs)

    const renderTabs = (eachTab) => {
        return (
            <TabMenuDiv key={"tabs" + eachTab.id} selected={eachTab.selected}>
                <TabMenuP selected={eachTab.selected}>{eachTab.title}</TabMenuP>
            </TabMenuDiv>
        )
    }

    return (
        <TabMenuMainDiv>
            {tabs.map((eachTab) => renderTabs(eachTab))}
        </TabMenuMainDiv>
    )
}
export default TabMenu