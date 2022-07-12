import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({  //getTodos va a traer  https://jsonplaceholder.typicode.com/todos
            query: () =>'/todos'
        }),
        getTodo: builder.query({  
            query: (todoId) => `/todos/${todoId}`
        }),
        
    })

});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;