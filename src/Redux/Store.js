import { configureStore } from '@reduxjs/toolkit'
import task from "./taskSlice/taskSlice"


export const store = configureStore({
  reducer: {task:task},
})