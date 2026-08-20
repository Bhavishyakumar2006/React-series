import React, { forwardRef, useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()

  return (
    <div className='w-full'>
        {label && <label htmlFor={id}>{ label }</label>}
        <select className={`${className}`} {...props} id={id} ref={ref}>
            {
                option?.map((option) => {
                    <option key={option} value={option}>
                        {option}
                    </option>
                })
            }
        </select>
    </div>
  )
}

export default forwardRef(Select)