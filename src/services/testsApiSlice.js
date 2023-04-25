/* eslint-disable no-unused-vars */
import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../app/api/apiSlice';

const testsAdapter = createEntityAdapter({});

const initialState = testsAdapter.getInitialState();

export const testsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTests: builder.query({
      query: () => '/tests',
      validateStatus: (response, result) =>
        response.status === 200 && !result.isError,
      // TODO: change to 60 sec for deployment
      keepUnusedDataFor: 5,
      // here we normalize data to return id property as expected
      transformResponse: (responseData) => {
        const loadedTests = responseData.map((test) => {
          test.id = test._id;
          return test;
        });
        return testsAdapter.setAll(initialState, loadedTests);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'Test', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'Test', id })),
          ];
        }
        return [{ type: 'Test', id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetTestsQuery } = testsApiSlice;

// returns the query result object
export const selectTestsResult = testsApiSlice.endpoints.getTests.select();

// creates memoized selector
const selectTestsData = createSelector(
  selectTestsResult,
  (testsResult) => testsResult.data, // normalized state object with ids & entities
);

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllTests,
  selectById: selectTestById,
  selectIds: selectTestIds,
  // pass in a selector that returns the tests slice of state
} = testsAdapter.getSelectors(
  (state) => selectTestsData(state) ?? initialState,
);
