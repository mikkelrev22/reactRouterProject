import React from 'react'
import auth from '../auth.js'

const AppLayout = (props) => {
  return (
    <div>
      <h1>App Layout</h1>
      <button onClick={()=>{auth.logout(()=>{
            props.history.push('/')
          })
        }}>Log Out
      </button>
    </div>
  )
}

export default AppLayout