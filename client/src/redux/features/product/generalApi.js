// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const generalApi = createApi({
//   reducerPath: "generalApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3000/api/" }),
//   tagTypes: ["Post"],
//   endpoints: (builder) => ({
//     fetchItems: builder.query({
//       query: () => ({
//         url: "products/getProducts",
//         method: "GET",
//       }),
//     }),
//     fetchUsers: builder.query({
//         query: () => ({
//             url: 'users/getUsers',
//             method: 'GET'
//         })
//     }),
//     fetchUsersCount: builder.query({
//         query: () => ({
//             url: 'users/getUsersCount',
//             method: 'GET'
//         })
//     })
//   }),
// });

// export const {
//   useFetchItemsQuery,
//   useFetchUsersQuery,
//   useFetchUsersCountQuery,
// } = generalApi;
