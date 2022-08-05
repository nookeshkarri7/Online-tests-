import React from 'react'
import logo from '../logo.svg';
import userImg from '../imageuser.svg';
import { Image, HeaderDiv, ImageUserDiv } from './StyledComponents'

const Header = () => {

    const renderHeader = () => {
        return <HeaderDiv>
            <Image src={logo} />
            <ImageUserDiv>
                <Image src={userImg} user />
            </ImageUserDiv>
        </HeaderDiv>
    }

    return (
        <div>{renderHeader()}</div>
    )
}
export default Header