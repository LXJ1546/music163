import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:100,
        name:'LXJ'
    },
    reducers:{
        changeMessageAction(state,{payload}){
            state.name=payload
        }
    }
})
export const {changeMessageAction}=counterSlice.actions;
export default counterSlice.reducer;