import React from 'react'
import { ItemMainDiv, ItemDiv, ItemImageDiv, ItemTitleDiv, Image, ItemTitle, Itemp, ItemLink } from './StyledComponents'
import { useDispatch } from 'react-redux';
import { storeViewItem } from '../redux/slicer'

const Item = ({ data, type, view }) => {
    const dispatch = useDispatch()
    const { category,
        description,
        icon_url,
        link,
        title, id } = data
    return (
        <ItemMainDiv onClick={() => { if (!view) { dispatch(storeViewItem(id)) } }} bgChange={view}>
            <ItemDiv >
                <ItemImageDiv view={view}>
                    <Image src={icon_url} item={type} view={view} />
                </ItemImageDiv>
                <ItemTitleDiv>
                    <ItemTitle>{title}</ItemTitle>
                    <Itemp>{category}</Itemp>
                    {view && <ItemLink href={link} target='_blank'>{link}</ItemLink>}
                </ItemTitleDiv>
            </ItemDiv>
            {!view && <ItemLink href={link} target='_blank'>{link}</ItemLink>}
            <Itemp>{description}</Itemp>
        </ItemMainDiv>
    )
}
export default Item