import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tabs: [{ id: 1, title: 'Resources', tag: "all" },
    { id: 2, title: 'Requests', tag: "request" },
    { id: 3, title: 'Users', tag: "user" }],
    selectedTabId: 1,
    selectedTag: "all",
    searchInput: '',
    searchPage: 'resourceSearch',
    allResources: [],
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
        },
        storeResources: (state, action) => {
            state.allResources = action.payload
        }
    }
})
export const { changeTab, changeSearchInput, storeResources } = adminSlice.actions
export default adminSlice.reducer