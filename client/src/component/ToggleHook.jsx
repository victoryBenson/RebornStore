import React, { useState } from 'react'

export const useToggle = (initialState) => {
    const [visible, setVisible] = useState(initialState)

    const toggle = () => {setVisible(!visible)}
  return [visible, toggle]
}


