import React from 'react'
import style from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={style.MyInput} {...props} />
      )
})

export default Input
