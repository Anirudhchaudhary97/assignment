import { configureStore } from '@reduxjs/toolkit'
import loginAuthSlice from '../reduxSlices/loginAuthSlice'

 const store = configureStore({
  reducer: {
    login:loginAuthSlice
  },
})

export default store