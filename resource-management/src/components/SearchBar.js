import React from 'react'
import { SearchBarMainDiv, SearchBarDiv, SearchBarInput, SearchBarIcon } from './StyledComponents'
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchInput } from '../redux/slicer'
import searchBarIcon from '../searchIcon.svg';

const SearchBar = ({ placeholder, type }) => {
    const searchInput = useSelector(({ adminReducer }) => adminReducer.searchInput)
    const dispatch = useDispatch()

    const changeInputFun = (e) => {
        e.preventDefault()
        dispatch(changeSearchInput({ searchInput: e.target.value, searchPage: type }))
    }

    return (
        <SearchBarMainDiv>
            <SearchBarDiv>
                <SearchBarIcon src={searchBarIcon} />
            </SearchBarDiv>
            <SearchBarInput placeholder={placeholder} onChange={changeInputFun} value={searchInput} />
        </SearchBarMainDiv>

    )
}
export default SearchBar