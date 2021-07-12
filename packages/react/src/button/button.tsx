import React from "react"

export interface Props {
  children?: React.ReactNode,
  styles?: any
}

export const buttonStyle = {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
}

const Button = (props: Props) => {
  return (
    <button type="button" {...props} />
  )
}

export { Button }