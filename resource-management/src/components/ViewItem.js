import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { storeSubData } from '../redux/slicer'
import axios from 'axios'
import { Backp, Image, ItemDiv, ViewItemDiv } from './StyledComponents';
import Item from './Item';
import ItemsTable from './ItemsTable';
import backIcon from '../backIcon.svg'
const ViewItem = () => {
    const [data, setData] = useState({})
    const { viewItem, subItems, selectedTag } = useSelector(({ adminReducer }) => adminReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        getResourceData()
    }, [])

    const getResourceData = async () => {
        let data = {};
        if (subItems.length === 0) {
            data = await axios.get(` https://media-content.ccbp.in/website/react-assignment/resource/${viewItem}.json`)
            console.log("🚀 ~ file: ViewItem.js ~ line 19 ~ getResourceData ~ data", data)
            dispatch(storeSubData({ subItems: data.data["resource_items"] }))
            const { description,
                icon_url,
                link,
                title, id } = data.data
            setData({
                description,
                icon_url,
                link,
                title, id
            })
        } else {
            data.resource_items = subItems
        }
    }

    const renderBackText = () => {
        let selected = selectedTag
        if (selected === 'all') {
            selected = "Resources"
        } else if (selected === 'user') {
            selected = "Users"
        } else {
            selected = "Requests"
        }
        return <Backp>{selected}</Backp>
    }
    const goToBack = () => {
        dispatch(storeSubData({ viewItem: 0, subItems: [] }))
    }

    return (
        <ViewItemDiv>
            <ItemDiv pointer onClick={goToBack}>
                <Image src={backIcon} back />
                {renderBackText()}
            </ItemDiv>
            <Item data={data} view={true} />
            <ItemsTable />
        </ViewItemDiv>
    )
}


export default ViewItem