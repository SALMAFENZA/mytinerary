import React from 'react'
import '../../Styles/Arrows.css'


export default function Arrow(props) {
  return (    
            <div className='Arrows-carousel'>
                <div onClick={ props.function }>
                    {props.icon}
                </div>
            </div>    

  )
}
