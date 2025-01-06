import React from 'react'
import './Title.css'

const Title = ({subTitle,title}) => {
  return (
    <div className='title mx-2 mt-8 md:mt-10 lg:mt-12'>
        <p className='text-base md:text-lg lg:text-xl'>{subTitle}</p>
        <h2 className='text-xl md:text-2xl lg:text-3xl mt-1 lg:mt-2'>{title}</h2>
    </div>
  )
}

export default Title
