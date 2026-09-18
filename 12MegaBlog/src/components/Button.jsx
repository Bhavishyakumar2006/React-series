import React from 'react'

function Button({
    children,
    className = '',
    bgColor,
    type = 'button',
    ...props
}) {
  return (
    
    <button className={`${className} ${bgColor}`} {...props}>{children}</button>
  )
}

export default Button