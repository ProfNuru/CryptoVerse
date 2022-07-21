import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'a171eb4a29mshc4820eeb5bdbe9fp152d74jsn1f7635c102c9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers:cryptoApiHeaders})

export const cryptoAPI = createApi({
    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
            
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoAPI
