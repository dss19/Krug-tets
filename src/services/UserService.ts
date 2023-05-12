import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import IUser from '../models/IUser'

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], ''>({
            query: () => ({
                url: '/users'
            })
        })
    }) 
})