import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBucketItems = createAsyncThunk('assets/fetch-bucket-items', async () => {
    const response = await fetch('http://34.29.61.85:5001/getAllItems', {
        method: 'GET',
    });
    const data = response.json();
    return data;
});

export const fetchRecommendationItems = createAsyncThunk('assets/fetch-recommendation-items', async (_data: any) => {
    console.log('data====', _data);
    const response = await fetch('http://34.29.61.85:5001/recommend', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = response.json();
    console.log('data', data);
    return data;
});
