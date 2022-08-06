import { useEffect, useState } from 'react'
import { AllItemsDiv, MainDiv } from './StyledComponents'
import SearchBar from './SearchBar'
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item'
import axios from 'axios'
import { storeResources, updateDataFetchStatus } from '../redux/slicer'
import TabMenu from './TabMenu';
import ViewItem from './ViewItem';
import Loader from './Loader';

const TabContent = () => {
    const [data, setData] = useState([])
    const { selectedTag, allResources, searchInput, viewItem, dataFetchStatus } = useSelector(({ adminReducer }) => adminReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        getResourceData()
    }, [selectedTag, searchInput])

    const getResourceData = async () => {
        let data = {};
        if (allResources.length === 0) {
            data = await axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json")
            console.log("🚀 ~ file: TabContent.js ~ line 24 ~ getResourceData ~ data", data)
            if (data.status === 200) {
                dispatch(storeResources(data.data))
                dispatch(updateDataFetchStatus('Success'))
            } else {
                dispatch(updateDataFetchStatus('Fail'))
            }

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
        {dataFetchStatus === 'Success' && (viewItem === 0 ? <>
            <TabMenu />
            <SearchBar placeholder='Search' type='resourceSearch' />
            <AllItemsDiv>
                {data.map((each) =>
                    <Item data={each} type key={"items" + each.tag + each.id} view={false} />
                )}
            </AllItemsDiv>
        </> : <ViewItem />)}
    </MainDiv>
    )
}

export default TabContent