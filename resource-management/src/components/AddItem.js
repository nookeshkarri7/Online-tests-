import React from 'react'
import { ItemDiv, Image, Backp, AddItemDiv, AddItemSubDiv, AddItemImageDiv, ItemFormDiv, InputBox, LabelBox, TextBox, AddFormTitle, FORM, Button } from './StyledComponents'
import backIcon from '../backIcon.svg'
import addItemSidebar from '../addItemSidebar.png'
import { addAction, updateDataFetchStatus } from '../redux/slicer'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function AddItem() {
    const dispatch = useDispatch()
    const { selectedTag,
        itemName,
        link,
        resourceName,
        description, subItems } = useSelector(({ adminReducer }) => adminReducer)

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
    const storeInput = (e) => {
        dispatch(addAction({ [e.target.name]: e.target.value }))
    }

    const addNewItem = (e) => {
        e.preventDefault()
        if (itemName === '' || link === '' || resourceName === '' || description === '') {
            toast.error("All fields are required ", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        } else if (itemName.length > 20) {
            toast.error("Item Name must be less than 20 Characters.", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        else if (!link.includes("http")) {
            toast.error("Please add valid Link.", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        else if (description.length < 10) {
            toast.error("Please add atlease 15 characters in description", {
                position: toast.POSITION.BOTTOM_CENTER
            })
        } else {
            createItem()
        }
    }

    const createItem = async () => {
        dispatch(updateDataFetchStatus('Loading'))
        const req = await axios.get("https://media-content.ccbp.in/website/react-assignment/add_resource.json", {})
        if (req.status === 200) {
            dispatch(addAction({
                subItems: [...subItems, {
                    title: itemName,
                    link,
                    description,
                    createdAt: new Date().toISOString(),
                    id: (subItems.length + 1).toString()
                }]
            }))
            dispatch(addAction({
                itemName: "",
                link: "",
                resourceName: "",
                description: "",
                showAdd: false
            }))
            dispatch(updateDataFetchStatus('Success'))
        } else {
            dispatch(updateDataFetchStatus('Fail'))
        }
    }
    const goToBack = () => {
        dispatch(addAction({
            itemName: "",
            link: "",
            resourceName: "",
            description: "",
            showAdd: false
        }))
    }
    return (
        <>
            <AddItemDiv>
                <AddItemSubDiv>
                    <ItemDiv pointer onClick={goToBack} >
                        <Image src={backIcon} back />
                        {renderBackText()}
                    </ItemDiv>
                    <ItemFormDiv>
                        <AddFormTitle>
                            Item Details
                        </AddFormTitle>
                        <FORM onSubmit={addNewItem}>
                            <LabelBox htmlFor='item-name'>ITEM NAME</LabelBox>
                            <InputBox id='item-name' value={itemName} name='itemName' onChange={storeInput} />

                            <LabelBox htmlFor='link-name'>LINK</LabelBox>
                            <InputBox id='link-name' value={link} name='link' onChange={storeInput} />

                            <LabelBox htmlFor='res-name'>RESOURCE NAME</LabelBox>
                            <InputBox id='res-name' value={resourceName} name='resourceName' onChange={storeInput} />

                            <LabelBox htmlFor='description'>DESCRIPTION</LabelBox>
                            <TextBox id='description' value={description} name='description' onChange={storeInput} />
                            <Button create type='submit'>CREATE</Button>
                        </FORM>
                    </ItemFormDiv>
                </AddItemSubDiv>
                <AddItemImageDiv>
                    <Image src={addItemSidebar} addItem />
                </AddItemImageDiv>
            </AddItemDiv>
        </>
    )
}
