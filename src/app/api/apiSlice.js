/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.BASE_URL,
  }),
  tagTypes: ['User', 'Test'],
  endpoints: (builder) => ({}),
});
