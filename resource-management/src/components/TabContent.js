import { useEffect, useState } from 'react'
import { AllItemsDiv, MainDiv } from './StyledComponents'
import SearchBar from './SearchBar'
import Item from './Item'
import axios from 'axios'
const TabContent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getResourceData = async () => {
            const data = await axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json")
            console.log("🚀 ~ file: ResourcesTab.js ~ line 10 ~ getResourceData ~ data", data)
            setData(data.data)
        }
        getResourceData()
    }, [])


    return (<MainDiv>
        <SearchBar placeholder='Search' type='resourceSearch' />
        <AllItemsDiv>
            {data.map((each) => <Item data={each} type />)}
        </AllItemsDiv>
    </MainDiv>
    )
}

export default TabContent