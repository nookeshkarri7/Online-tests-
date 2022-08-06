import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { storeSubData, changeSortAction, updateDataFetchStatus } from '../redux/slicer'
import axios from 'axios'
import { Backp, Button, Image, ItemDiv, Itemp, ItemTitle, SortDiv, ViewItemDiv } from './StyledComponents';
import Item from './Item';
import ItemsTable from './ItemsTable';
import backIcon from '../backIcon.svg'
import SearchBar from './SearchBar';
import sortIcon from '../sortIcon.svg'
import AddItem from './AddItem';

const ViewItem = () => {
    const [data, setData] = useState({})
    const [subItemsData, setSubItemsData] = useState([])
    const { viewItem, subItems, showAdd, selectedTag, showSortBy, sortByType, subItemInfo, searchPage, searchInput } = useSelector(({ adminReducer }) => adminReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        getResourceData()
    }, [searchInput, subItems, sortByType])

    const getResourceData = async () => {
        let newData;
        if (subItems.length === 0) {
            dispatch(updateDataFetchStatus('Loading'))
            let data = await axios.get(` https://media-content.ccbp.in/website/react-assignment/resource/${viewItem}.json`)
            if (data.status === 200) {
                const { description,
                    icon_url,
                    link,
                    title, id } = data.data
                dispatch(storeSubData({
                    subItemInfo: {
                        description,
                        icon_url,
                        link,
                        title, id
                    }, subItems: data.data["resource_items"]
                }))
                setData({
                    description,
                    icon_url,
                    link,
                    title, id
                })
                newData = data.data["resource_items"]
                setSubItemsData(data.data["resource_items"])
                dispatch(updateDataFetchStatus('Success'))
            } else {
                dispatch(updateDataFetchStatus('Fail'))
            }

        } else {
            setData(subItemInfo)
            newData = subItems
            setSubItemsData(subItems)
        }
        if (searchPage === "viewData") {
            setSubItemsData(newData.filter((eachItem) => eachItem.title.toLowerCase().includes(searchInput.toLowerCase())))
        } else {
            setSubItemsData(newData.filter((eachItem) => eachItem.title.toLowerCase().includes(searchInput.toLowerCase())))
        }
        if (sortByType === 'recent') {
            setSubItemsData(newData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
        } else if (sortByType === 'asc') {
            setSubItemsData(newData.sort())
        } else {
            setSubItemsData(newData.sort().reverse())
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
        dispatch(storeSubData({ viewItem: 0, subItems: [], searchInput: "" }))
    }

    const showSortByFun = () => {
        dispatch(changeSortAction({ showSortBy: !showSortBy }))
    }

    const changeSortByFun = (val) => {
        dispatch(changeSortAction({ sortByType: val }))
    }
    const getDetails = () => <>
        <ItemDiv pointer onClick={goToBack}>
            <Image src={backIcon} back />
            {renderBackText()}
        </ItemDiv>
        <Item data={data} view={true} />
        <Button update>UPDATE</Button>
        <ItemDiv view>
            <ItemTitle alignLeft>Items</ItemTitle>
            <SearchBar placeholder='Search' type='viewData' />
            <ItemDiv pointer onClick={showSortByFun}>
                <Image src={sortIcon} sortby />
                <Itemp>SORT</Itemp>
            </ItemDiv>
        </ItemDiv>
        {
            showSortBy && <SortDiv>
                <Itemp highlight={sortByType === 'recent'} onClick={() => changeSortByFun("recent")}>Recently Added</Itemp>
                <Itemp highlight={sortByType === 'asc'} onClick={() => changeSortByFun("asc")}>Ascending</Itemp>
                <Itemp highlight={sortByType === 'desc'} onClick={() => changeSortByFun("desc")}>Descending</Itemp>
            </SortDiv>
        }
        {subItemsData.length > 0 && !showAdd && <ItemsTable subItems={subItemsData} />}
    </>

    return (
        <ViewItemDiv>
            {!showAdd ? getDetails() : <AddItem />}
        </ViewItemDiv>
    )
}


export default ViewItem