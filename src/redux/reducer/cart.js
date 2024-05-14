import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name: "cart",
    initialState: {
        list: [],
        sort: true,
        searchList: ""
    },
    reducers: {
        addItem: (state, { payload }) => {
            state.list = [...state.list, payload];
        },

        removeItem: (state, { payload }) => {
            state.list = state.list.filter((value) => payload !== value['Title'])
        },

        sortItem: (state, { payload }) => {
            state.sort = payload
        },
        Searching: (state, { payload }) => {
            state.searchList = payload;
        },
    }
})

export const { addItem, removeItem, sortItem, Searching } = cartslice.actions
export default cartslice.reducer