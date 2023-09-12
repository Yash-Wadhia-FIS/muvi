import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {items, AssetsList} from '../../../app/modules/apps/search-assets/assets-list/list/items/AssetsList';
import {fetchBucketItems} from '../actions/assetAction';

// Define the initial state for the slice
interface AssetsState {
  assets: Array<items>;
  metadata: Array<string>;
  loading: boolean;
}

const initialState: AssetsState = {
  assets: [...AssetsList],
  metadata: [],
  loading: false
};

// Create the counter slice
const counterSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    onAddAssets: (state, action: PayloadAction<items>) => {
        state.assets.push(action.payload);
    },
    onAddMetadata: (state, action: PayloadAction<Array<string>>) => {
        state.metadata = [...state.metadata, ...action.payload];
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchBucketItems.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchBucketItems.fulfilled, (state, action) => {})
    .addCase(fetchBucketItems.rejected, (state, action) => {})
  }
});

// Export the actions and reducer
export const { onAddAssets, onAddMetadata } = counterSlice.actions;
export default counterSlice.reducer;
