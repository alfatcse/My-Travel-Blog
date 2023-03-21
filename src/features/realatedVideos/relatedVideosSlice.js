import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRealatedVideos } from "./relatedVideosAPI";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchRelatedVideos = createAsyncThunk("relatedVideos/fetchRelatedVideos", async ({tags,is}) => {
  const relatedVideos = await getRealatedVideos({tags,is});
  return relatedVideos;
});
const RelatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchRelatedVideos.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(fetchRelatedVideos.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.relatedVideos=action.payload;
    })
    .addCase(fetchRelatedVideos.rejected,(state,action)=>{
        state.isLoading=false;
        state.relatedVideos=[];
        state.isError=true;
        state.error=action.error?.message;
    })
  },
});
export default RelatedVideosSlice.reducer;
