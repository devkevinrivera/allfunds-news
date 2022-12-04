import { configureStore } from '@reduxjs/toolkit'
import publicationSlice from '../redux/slices/Publication'

export default configureStore({
  reducer: {
    publications: publicationSlice
  }
})