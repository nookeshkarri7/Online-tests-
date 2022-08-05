import React from 'react'
import { ItemMainDiv, ItemDiv, ItemImageDiv, ItemTitleDiv, Image, ItemTitle, Itemp, ItemLink } from './StyledComponents'
import { useDispatch, useSelector } from 'react-redux';


const Item = ({ imgSrc, type }) => {
    return (
        <ItemMainDiv>
            <ItemDiv>
                <ItemImageDiv>
                    <Image src={imgSrc} item={type} />
                </ItemImageDiv>
                <ItemTitleDiv>
                    <ItemTitle>Dropbox,inc</ItemTitle>
                    <Itemp>Dropbox,inc</Itemp>
                </ItemTitleDiv>
            </ItemDiv>
            <ItemLink >Dropbox,inc</ItemLink>
            <Itemp>Dropbox,inc</Itemp>
        </ItemMainDiv>
    )
}
export default Item