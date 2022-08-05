import { useEffect, useState } from 'react'
import { AllItemsDiv, MainDiv } from './StyledComponents'
import SearchBar from './SearchBar'
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item'
import axios from 'axios'
import { storeResources } from '../redux/slicer'
import TabMenu from './TabMenu';
import ViewItem from './ViewItem';

const TabContent = () => {
    const [data, setData] = useState([])
    const { selectedTag, allResources, searchInput, viewItem } = useSelector(({ adminReducer }) => adminReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        getResourceData()
    }, [selectedTag, searchInput])

    const getResourceData = async () => {
        let data = {};
        if (allResources.length === 0) {
            data = await axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json")
            dispatch(storeResources(data.data))
        } else {
            data.data = allResources
        }
        if (selectedTag === "all") {
            setData(data.data.filter((eachItem) => eachItem.title.toLowerCase().includes(searchInput.toLowerCase())))
        } else {
            setData(data.data.filter((eachItem) => eachItem.tag === selectedTag && eachItem.title.toLowerCase().includes(searchInput.toLowerCase())))
        }

    }

    return (<MainDiv>
        {viewItem === 0 ? <>
            <TabMenu />
            <SearchBar placeholder='Search' type='resourceSearch' />
            <AllItemsDiv>
                {data.map((each) =>
                    <Item data={each} type key={"items" + each.tag + each.id} view={false} />
                )}
            </AllItemsDiv>
        </> : <ViewItem />}
    </MainDiv>
    )
}

export default TabContent