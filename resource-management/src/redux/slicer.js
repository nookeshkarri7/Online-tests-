import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tabs: [{ id: 1, title: 'Resources', selected: true }, { id: 2, title: 'Requests', selected: false }, { id: 3, title: 'Users', selected: false }]
}
const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {

    }
})
export const { } = adminSlice.actions
export default adminSlice.reducer