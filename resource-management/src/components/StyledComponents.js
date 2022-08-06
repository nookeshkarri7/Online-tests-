import styled from 'styled-components'

export const devices = {
    s: `(max-width: 767px)`,
    m: `(min-width: 768px)`,
};
export const LoaderDiv = styled.div`
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
`
export const Image = styled.img`
  height:60px;
  width:60px;
  ${props => props.user && `width:40px;height:40px;border-radius:100px;`}
  ${props => props.item && `width:36px;height:36px;`}
  ${props => props.view && `width:40px;height:36px;border-radius:100px;`}
  ${props => props.back && `width:12px;height:07px;`}
  ${props => props.noresult && `width:50vw;height:50vh;margin-top:10vh;`}
  ${props => props.sortby && 'width:15px;height:15px;cursor:pointer;margin-left:15px;margin-right:5px;'}
  ${props => props.addItem && `width:50vw;height:100vh;`}
  ${props => props.login && `width:40vw;height:100vh;`}
  `

export const HeaderDiv = styled.div`
        padding-top:16px;
        padding-bottom:16px;
        padding-left:40px;
        padding-right:40px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        height:40px;
        border-width:0px 0px 2px 0px;
        border-style: solid;
        border-bottom-color: #D7DFE9;
        background:#fff;
    `
export const ImageUserDiv = styled.div`
    cursor:pointer;
`

export const TabMenuMainDiv = styled.div`
    align-items:center;
    margin-top:40px;
    
    @media ${devices.s}{
        display:flex;
        flex-direction:column;
        font-size: 10px;
    }

    @media ${devices.m}{
        display:flex;
        flex-direction:row;
        font-size: 13px;
        padding-left:30%;
        padding-right:30%;
    }
`
export const TabMenuDiv = styled.div`
    width:200px;
    border: 1px solid #D7DFE9;
    border-radius:2px;
    cursor:pointer;
    ${props => props.selected ? 'background: #0B69FF;' : 'background: rgba(215, 223, 233, 0.24)'}
`
export const TabMenuP = styled.p`
    font-weight: 600;
    text-align: center;
    color:${props => props.selected ? '#FFFFFF;' : 'black'}
`

// SearchBarDiv, SearchBarInput 
export const SearchBarMainDiv = styled.div`
    border: 1px solid #D7DFE9;
    border-radius: 3px;
    width:500px;
    display:flex;
    flex-direction:row;
    height:25px;
    padding:8px;
    margin-top:20px;
    margin-bottom:20px;
    background:#fff;
    @media ${devices.s}{
        width:90%;
    }
`

export const SearchBarDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const SearchBarIcon = styled.img`
    width:12px;
    height:12px;
    margin-right:10px;
`

export const SearchBarInput = styled.input`
    width:100%;
    padding:7px;
    height:10px;
    border:0;outline:0;
    input:focus 
    {
        outline:none!important;
    }
    ${props => props.checkbox && 'height:15px;background:#D7DFE9;'}
`
export const MainDiv = styled.div`
    padding:15px;
    padding-left:5%;
    padding-right:5%;
`
export const AllItemsDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap 
`
export const ItemMainDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding:15px;
    border: 1px solid #D7DFE9;
    border-radius: 4px;
    width:360px;
    margin-right:10px;
    margin-bottom:10px;
    cursor:pointer;
    background:#fff;
    ${props => props.bgChange && 'background:#F5F5F5;border-width:0px;'}
    @media ${devices.s}{
        width:95%;
    }
`
export const ItemTitleDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
    
`
export const ItemDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    ${props => props.pointer && 'cursor:pointer;margin-bottom:10px;'}
    ${props => props.view && 'justify-content:flex-end;'}
    

`
export const ItemImageDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: #FFFFFF;
    border: 2px solid #D7DFE9;
    border-radius: 4px;
    padding:5px;
    height:40px;
    ${props => props.view && `padding:10px;border-radius:100px; `}
`
export const ItemTitle = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom:-10px;
    margin-top:1px;
    ${props => props.alignLeft && `margin-right:auto;font-size:    24px ;color:#171F46;`}
`
export const Itemp = styled.p`

    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7E858E;
    &:hover{
        background: rgba(215, 223, 233, 0.24);
    }
    ${props => props.highlight && `background: rgba(215, 223, 233, 0.24);`}
`
export const ItemLink = styled.a`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #0B69FF;
    cursor:pointer;
    text-decoration:none;
`

export const ViewItemDiv = styled.div`
@media ${devices.s}{
    height:150vh;
}
    
`

export const Backp = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #7E858E;
`
export const SortDiv = styled.div`
        width:136px;
        height:134px;
        background: #FFFFFF;
        border-radius: 4px;
        position:absolute;
        right:4%;
        cursor:pointer;
        box-shadow: 5px 5px 5px 5px #888888;
        padding:10px;
        margin-top:-10px;
`

export const TableHeader = styled.p`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #7E858E;
    text-align:left;
    padding-left:20px;
`

export const TableMainDiv = styled.div`
    
    @media ${devices.s}{
        overflow-x:scroll;
    }
    
`


export const TableMain = styled.table`

    
`
export const TableHead = styled.thead`
    background: #FFFFFF;
    
`

export const TableTr = styled.tr`
    background: #FFFFFF;    
    
`
export const TableTh = styled.th`
`
//    ${props => props.descRes ? `width:40%;` : `width:20%;`}
export const TableTd = styled.td`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7E858E;
    padding:10px;
`
export const TableCell = styled.div`
    padding:10px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7E858E;
`

export const Button = styled.button`
    border-radius: 4px;
    color:#fff;
    border-width:0px;
    margin-top:15px;
    margin-right:15px;
    height: 40px;
    padding: 8px 20px;
    cursor:pointer;
    ${props => props.update && 'background:#0B69FF;'}
    ${props => props.add && 'background:#2DCA73;width:100px; padding: 0px 0px;'}
    ${props => props.delete && 'background:#FF0B37;'}
    ${props => props.create && 'background:#0B69FF;width:93px;margin:auto;margin-top:20px;'}
`
export const TableFooter = styled.div`
     display:flex;
     flex-direction:row;
`
export const TableFooterInner = styled.div`
     display:flex;
     flex-direction:row;
     justify-content:flex-end;
`
export const PaginationButton = styled.button`
    border-radius: 4px;
    color:black;
    background:#fff;
    border-width:0px;
    margin-top:15px;
    margin-right:15px;
    height: 30px;
    padding: 8px 20px;
    cursor:pointer;
    border:1px solid black;
    ${props => props.disabled && 'background:#F5F5F5;'}
`
export const AddItemDiv = styled.div`
    display:flex;
    flex-direction:row;
`
export const AddItemSubDiv = styled.div`
    display:flex;
    flex-direction:column;
    ${props => props.login && 'margin:auto;'}
`

export const AddItemImageDiv = styled.div`
    margin-left:auto;
    @media ${devices.s}{
        display:none;
    }
`


export const ItemFormDiv = styled.div`
    display:flex;
    flex-direction:column;

`
export const InputBox = styled.input`
    height:30px;
    width:100%;
    border: 1px solid #D7DFE9;
    border-radius: 2px;
`
export const LabelBox = styled.label`
    margin-top:25px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #7E858E;
    margin-bottom:6px;
`
export const TextBox = styled.textarea`
    height:100px;
    width:320px;
    border: 1px solid #D7DFE9;
    border-radius: 2px;
`

export const AddFormTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #171F46;
    text-align:center;
`

export const FORM = styled.form`
    display:flex;
    flex-direction:column;
`

export const AlignRightt = styled.div`
position:absolute;
right:50px;
    @media ${devices.s}{
        position:relative;
        margin-left:50px;
        
    }
`
export const Menu = styled.div`
    width:70px;
    height:30px;
    background: #FFFFFF;
    border-radius: 4px;
    position:absolute;
    right:5%;
    cursor:pointer;
    box-shadow: 2px 2px 2px 2px #888888;
    padding:10px;
    margin-top:50px;

`