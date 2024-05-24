
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthticated:false,
    username:null,
    email:null,
    password:null
}


const loginAuthSlice=createSlice({
       initialState:initialState,
       name:"login",
       reducers:{
          loginAuth(state,action){
             state.isAuthticated=true
             state.username=action.payload.username
             state.email=action.payload.email
             state.password=action.payload.password
          },
          logoutAuth(state){
             state.isAuthticated=false
             state.username=null
             state.email=null
             state.password=null
          }
       }
})

export const {loginAuth,logoutAuth} =loginAuthSlice.actions
export default loginAuthSlice.reducer