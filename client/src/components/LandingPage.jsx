import React from 'react'
import auth from '../auth.js'

const LandingPage = (props) => {
  return (
  <div>
    Welcome to the landing page
      <button onClick={()=> {auth.login(()=>{
          props.history.push('/app')
        })
        }}> Log In 
      </button>
  </div>
  )
}

export default LandingPage