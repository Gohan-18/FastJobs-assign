import { createSlice } from "@reduxjs/toolkit";

const setUserSlice = createSlice({
    name: 'setUser',
    initialState: {
        user: {}
    },
    reducers: {
        addUser(state, action) {
            state.user = action.payload
            console.log(state.user)
        },
        // removeFromWishlist(state, action) {
        //     const { product } = action.payload;
        //     const index = state.list.findIndex(({ product : prod}) => prod.id === product.id);
        //     if (index > -1) {
        //         state.list.splice(index,1);
        //     }
        // }
    }
})

export const { addUser } = setUserSlice.actions;
export default setUserSlice.reducer;