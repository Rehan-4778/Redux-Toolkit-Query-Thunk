import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { usersReducer } from "./slices/UsersSlice";

import { albumsApi } from './apis/AlbumsApi'
import { photosApi } from './apis/PhotosApi'

const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,  // [albummsApi.reducerPath] returns 'albums'
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    }
})

setupListeners(store.dispatch);

// For Testing only
window.store = store;

export { store }
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser"

export { useFetchAlbumsQuery, useAddAblumMutation, useDeleteAlbumMutation } from './apis/AlbumsApi';
export { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } from './apis/PhotosApi';