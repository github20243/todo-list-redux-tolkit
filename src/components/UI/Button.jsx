import { ButtonBase as Button } from '@mui/material'
import React from 'react'

const Button = ({children, onClick, ...rest }) => {
  return (
    <div>
      <Button onClick={onClick} {...rest}>{children}</Button>
    </div>
  )
}

export default Button
