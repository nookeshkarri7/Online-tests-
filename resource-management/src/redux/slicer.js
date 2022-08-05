import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tabs: [{ id: 1, title: 'Resources' },
    { id: 2, title: 'Requests' },
    { id: 3, title: 'Users' }],
    selectedTabId: 1,
    searchInput: '',
    searchPage: 'resourceSearch'
}
const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        changeTab: (state, action) => {
            return { ...state, ...action.payload }
        },
        changeSearchInput: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})
export const { changeTab, changeSearchInput } = adminSlice.actions
export default adminSlice.reducer