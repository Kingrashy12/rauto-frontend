import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./api";

export const ListingApi = createApi({
  reducerPath: "ListingApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  endpoints: (builder) => ({
    getAllListings: builder.query({
      query: () => "listing",
    }),
  }),
});

export const { useGetAllListingsQuery } = ListingApi;
