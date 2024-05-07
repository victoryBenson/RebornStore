import React, { useEffect, useRef } from 'react'

export const TestRun = () => {
    const count = useRef()

    useEffect(()=>{
        count.current
    })
  return (
    <div>{}</div>
  )
}
