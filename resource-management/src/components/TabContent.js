import { useEffect, useState } from 'react'
import { AllItemsDiv, MainDiv } from './StyledComponents'
import SearchBar from './SearchBar'
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item'
import axios from 'axios'
import { storeResources } from '../redux/slicer'

const TabContent = () => {
    const [data, setData] = useState([])
    const { selectedTag, allResources } = useSelector(({ adminReducer }) => adminReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        getResourceData()
    }, [selectedTag])

    const getResourceData = async () => {
        let data = {};
        if (allResources.length === 0) {
            data = await axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json")
            dispatch(storeResources(data.data))
        } else {
            data.data = allResources
        }

        if (selectedTag === "all") {
            setData(data.data)
        } else {
            setData(data.data.filter((eachItem) => eachItem.tag === selectedTag))
        }

    }

    return (<MainDiv>
        <SearchBar placeholder='Search' type='resourceSearch' />
        <AllItemsDiv>
            {data.map((each) => <Item data={each} type />)}
        </AllItemsDiv>
    </MainDiv>
    )
}

export default TabContent