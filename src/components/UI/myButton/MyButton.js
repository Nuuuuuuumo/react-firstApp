import React from 'react'
import style from './MyButton.module.css'

export default function MyButton({children, ...props}) {
  return (
      <button {...props} className={style.Button} >
        {children}
      </button>
  )
}
