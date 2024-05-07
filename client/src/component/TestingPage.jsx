import React from 'react'
import { useFetchItemsQuery } from '../redux/features/product/productServices'

export const TestingPage = () => {
    const {data = [], error, isLoading, isFetching,isError, isSuccess} = useFetchItemsQuery()
    console.log(data)

    if (isError) return <div >An error has occurred!</div>

    if (isLoading) return <span>Loading...</span>

  return (
    <div className={isFetching && 'posts--disabled'}>
        {
            data?.map((item) => {
               return(
                <div>
                    <p className='p-2 font-bold'>{item.name}</p>
                    <p>{item._id}</p>
                </div>
               ) 
            })
        }
    </div>
  )
}
