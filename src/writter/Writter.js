import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function Writter() {

  
  return (
    <div className='App'>
    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
      Life is simple{' '}
      <span style={{ color: 'red', fontWeight: 'bold' }}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={['', 'Sleep', 'Code', 'Repeat!']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          
        />
      </span>
    </h1>
  </div>
    
  )
}

export default Writter