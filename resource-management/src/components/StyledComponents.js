import styled, { css } from 'styled-components'

export const devices = {
    s: `(max-width: 767px)`,
    m: `(min-width: 768px)`,
};
export const Image = styled.img`
  height:60px;
  width:60px;
  ${props => props.user && `width:40px;height:40px;border-radius:100px;`}
`

export const HeaderDiv = styled.div`
        padding-top:16px;
        padding-bottom:16px;
        padding-left:40px;
        padding-right:40px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        height:50px;
        border-width:0px 0px 2px 0px;
        border-style: solid;
        border-bottom-color: #D7DFE9;
    `
export const ImageUserDiv = styled.div`
    
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
    ${props => props.selected ? 'background: #0B69FF;' : 'background: rgba(215, 223, 233, 0.24)'}
`
export const TabMenuP = styled.p`
    font-family: 'HK Grotesk';
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color:${props => props.selected ? '#FFFFFF;' : 'black'}
`