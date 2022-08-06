import { useState } from 'react';
import logo from '../logo.svg';
import userImg from '../imageuser.svg';
import { Image, HeaderDiv, ImageUserDiv, Menu, ItemTitle } from './StyledComponents'
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../redux/slicer'

const Header = () => {
    const dispatch = useDispatch()
    const [viewMenu, setViewMenu] = useState(false)
    const { loggedIn } = useSelector(({ adminReducer }) => adminReducer)
    const logoutUser = () => {
        dispatch(loginAction({ loggedIn: false }))
    }
    const renderHeader = () => {
        return <>
            <Image src={logo} />
            <ImageUserDiv onClick={() => setViewMenu(!viewMenu)}>
                <Image src={userImg} user />
            </ImageUserDiv>
            {viewMenu && loggedIn && <Menu onClick={() => logoutUser()}>
                <ItemTitle>Logout</ItemTitle>
            </Menu>}
        </>
    }

    return (
        <HeaderDiv>{renderHeader()}</HeaderDiv>
    )
}
export default Header