import React from 'react'
import { TabMenuDiv, TabMenuMainDiv, TabMenuP } from './StyledComponents'
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../redux/slicer'

const TabMenu = () => {
    const tabs = useSelector(({ adminReducer }) => adminReducer.tabs)
    const selectedTabId = useSelector(({ adminReducer }) => adminReducer.selectedTabId)
    const dispatch = useDispatch()

    const changeTabFun = (id) => {
        dispatch(changeTab({ selectedTabId: id }))
    }

    const renderTabs = (eachTab) => {
        return (
            <TabMenuDiv key={"tabs" + eachTab.id} selected={eachTab.id === selectedTabId} onClick={() => changeTabFun(eachTab.id)}>
                <TabMenuP selected={eachTab.id === selectedTabId}>{eachTab.title}</TabMenuP>
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