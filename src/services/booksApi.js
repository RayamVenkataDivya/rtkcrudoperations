// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:4000/books'}),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ``,
    }),
    addBook:builder.mutation({
        query: (newBook) => ({
            url: ``,
            method: 'POST',
            body: newBook,
          }),
    }),
    deleteBook:builder.mutation({
        query: (index) => {
            return {
                url:`/${index}`,
                method:'DELETE',
            }
          }
    }),
    updateBook:builder.mutation({
        query: (updateBook) => {
            return {
                url:`/${updateBook.id}`,
                method:'PUT',
                body:updateBook
            }
          }
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBooksQuery,useAddBookMutation,useLazyGetAllBooksQuery,useDeleteBookMutation,useUpdateBookMutation } = booksApi