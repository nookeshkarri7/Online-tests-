import React from 'react'
import logo from '../logo.svg';
import userImg from '../imageuser.svg';
import { Image, HeaderDiv, ImageUserDiv } from './StyledComponents'

const Header = () => {

    const renderHeader = () => {
        return <>
            <Image src={logo} />
            <ImageUserDiv>
                <Image src={userImg} user />
            </ImageUserDiv>
        </>
    }

    return (
        <HeaderDiv>{renderHeader()}</HeaderDiv>
    )
}
export default Header