import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({

    name: 'ui',
    initialState: { 
        showingCart: false,
        notification: null
    },

    reducers: { 
        //map of all reducers, or maps of methods that represents all the cases or actions we'd like to handle with this reducer
        
        toggle(statum){
            statum.showingCart = !statum.showingCart
        },

        showNotification(state, aksi) {
            state.notification = {
                status: aksi.payload.status,
                title: aksi.payload.title,
                message: aksi.payload.message 
            };
        },
    },
});

export const aksiUi = uiSlice.actions;

export default uiSlice;