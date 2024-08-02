import createSlice from './createSlice';

const uiSlice = createSlice({
    name:'ui',
    initialState:{
        cartIsVisible:false
    },
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})


export const uiActions = uiSlice.actions;
