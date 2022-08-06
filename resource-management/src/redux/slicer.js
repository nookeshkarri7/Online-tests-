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
    viewItem: 0,
    subItems: [],
    showSortBy: false,
    sortByType: 'recent',
    checked: [],
    subItemInfo: {},
    dataFetchStatus: "Loading",
    showAdd: false,
    itemName: "",
    link: "",
    resourceName: "",
    description: ""
}
const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        updateDataFetchStatus: (state, action) => {
            state.dataFetchStatus = action.payload
        },
        changeTab: (state, action) => {
            return { ...state, ...action.payload }
        },
        changeSearchInput: (state, action) => {
            return { ...state, ...action.payload }
        },
        storeResources: (state, action) => {
            state.allResources = action.payload
        },
        storeViewItem: (state, action) => {
            state.viewItem = action.payload
            state.searchInput = ''
        },
        storeSubData: (state, action) => {
            return { ...state, ...action.payload }
        },
        changeSortAction: (state, action) => {
            return { ...state, ...action.payload }
        },
        deleteAction: (state, action) => {
            return { ...state, ...action.payload }
        },
        addAction: (state, action) => {
            return { ...state, ...action.payload }
        },
    }
})
export const { changeTab, changeSearchInput, storeResources, storeViewItem, storeSubData, changeSortAction, deleteAction, updateDataFetchStatus, addAction } = adminSlice.actions
export default adminSlice.reducer