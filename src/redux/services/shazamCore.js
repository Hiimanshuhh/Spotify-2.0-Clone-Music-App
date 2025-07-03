import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const shazamCoreApi = createApi({
  reducerPath:'shazamCoreApi',
  baseQuery:fetchBaseQuery({
    baseUrl:"https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders:(headers)=>{
      headers.set('x-rapidapi-key','435e73471emsh00dc6559311e62ap1ad5cdjsnefc2b741e761');
      headers.set('x-rapidapi-host','shazam-core.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints:(builder)=>({
    getTopCharts:builder.query({query:() => '/charts/world?country_code=DZ'})
  })
})

export const{
  useGetTopChartsQuery,
} = shazamCoreApi; 