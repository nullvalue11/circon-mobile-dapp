import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const homePageSlice = createSlice({
  name: "homePageSlice",
  initialState: {
    currentTab: "home"
  },
  reducers: {
    tabsFun(state, action) {
      state.currentTab = action.payload
    }
  }
})

export const { tabsFun } = homePageSlice.actions
export default homePageSlice.reducer