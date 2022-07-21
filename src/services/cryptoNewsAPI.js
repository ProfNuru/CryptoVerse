import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'a171eb4a29mshc4820eeb5bdbe9fp152d74jsn1f7635c102c9',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews: builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&Count=${count}`),
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi
