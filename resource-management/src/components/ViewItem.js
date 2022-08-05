import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { storeSubData, changeSortAction } from '../redux/slicer'
import axios from 'axios'
import { Backp, Image, ItemDiv, Itemp, ItemTitle, SortDiv, ViewItemDiv } from './StyledComponents';
import Item from './Item';
import ItemsTable from './ItemsTable';
import backIcon from '../backIcon.svg'
import SearchBar from './SearchBar';
import sortIcon from '../sortIcon.svg'

const ViewItem = () => {
    const [data, setData] = useState({})
    const { viewItem, subItems, selectedTag, showSortBy } = useSelector(({ adminReducer }) => adminReducer)
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

    const showSortByFun = () => {
        dispatch(changeSortAction({ showSortBy: !showSortBy }))
    }

    return (
        <ViewItemDiv>
            <ItemDiv pointer onClick={goToBack}>
                <Image src={backIcon} back />
                {renderBackText()}
            </ItemDiv>
            <Item data={data} view={true} />
            <ItemDiv view>
                <ItemTitle alignLeft>Items</ItemTitle>
                <SearchBar placeholder='Search' type='viewData' />
                <ItemDiv pointer onClick={showSortByFun}>
                    <Image src={sortIcon} sortby />
                    <Itemp>SORT</Itemp>
                </ItemDiv>
            </ItemDiv>
            {showSortBy && <SortDiv>
                <Itemp >Recently Added</Itemp>
                <Itemp>Ascending</Itemp>
                <Itemp>Descending</Itemp>
            </SortDiv>}
            <ItemsTable />
        </ViewItemDiv>
    )
}


export default ViewItem