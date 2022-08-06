import React from 'react'
import { ItemDiv, Image, Backp, AddItemDiv, AddItemSubDiv, ItemImageDiv, AddItemImageDiv, ItemTitle, ItemFormDiv, InputBox, LabelBox, TextBox, AddFormTitle } from './StyledComponents'
import backIcon from '../backIcon.svg'
import addItemSidebar from '../addItemSidebar.png'
import { useDispatch, useSelector } from 'react-redux';

export default function AddItem() {
    const { selectedTag } = useSelector(({ adminReducer }) => adminReducer)

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
    return (
        <>
            <AddItemDiv>
                <AddItemSubDiv>
                    <ItemDiv pointer >
                        <Image src={backIcon} back />
                        {renderBackText()}
                    </ItemDiv>
                    <ItemFormDiv>
                        <AddFormTitle>
                            Item Details
                        </AddFormTitle>
                        <LabelBox htmlFor='item-name'>ITEM NAME</LabelBox>
                        <InputBox id='item-name' />

                        <LabelBox htmlFor='link-name'>LINK</LabelBox>
                        <InputBox id='link-name' />

                        <LabelBox htmlFor='res-name'>RESOURCE NAME</LabelBox>
                        <InputBox id='res-name' />

                        <LabelBox htmlFor='description'>DESCRIPTION</LabelBox>
                        <TextBox id='description' />
                    </ItemFormDiv>
                </AddItemSubDiv>
                <AddItemImageDiv>
                    <Image src={addItemSidebar} addItem />
                </AddItemImageDiv>
            </AddItemDiv>
        </>
    )
}
