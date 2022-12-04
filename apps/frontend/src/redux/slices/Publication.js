import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPublicationByDate, getPublicationsArchived } from '../../services/publications'

export const fetchPublicationByDate = createAsyncThunk(
    'publications/fetchByDate',
    async (publication, thunkAPI) => {
      const { data } = await getPublicationByDate(); 
      fetchPublicationArchivedByDate();
      return data;
    }
);

export const fetchPublicationArchivedByDate = createAsyncThunk(
    'publications/fetchArchivedByDate',
    async (publication, thunkAPI) => {
      const { data } = await getPublicationsArchived(); 
      fetchPublicationByDate();
      return data;
    }
);

export const publicationSlice = createSlice({
  name: 'publications',
  initialState: {
    publicationNews: [],
    publicationArchived: []
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPublicationByDate.fulfilled, (state, action) => {
        state.publicationNews = action.payload;
    })
    builder.addCase(fetchPublicationArchivedByDate.fulfilled, (state, action) => {
        state.publicationArchived = action.payload;
    })
  }
})

export const { increment } = publicationSlice.actions

export default publicationSlice.reducer