import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker'

// DEV ONLY
// const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        // DEV ONLY
        // fetchFn: async (...args) => {
        //     await pause(2000);
        //     return fetch(...args);
        // }
    }),
    endpoints: (builder) => {
        return {
            deleteAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'Album', id: album.id }]
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE',
                    }
                }
            }),

            addAblum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'UsersAlbums', id: user.id }]
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName(),
                        }
                    }
                }
            }),

            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map((album) => {
                        return { type: 'Album', id: album.id }
                    });
                    tags.push({ type: 'UsersAlbums', id: user.id })
                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id,
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }

})

export const { useFetchAlbumsQuery, useAddAblumMutation, useDeleteAlbumMutation } = albumsApi;
export { albumsApi }
