import React, { useEffect, useState } from 'react'
import UserContext from './Context'
import styles from './app.module.css'
import getCookie from './utils/cookie'


const App = (props) => {
  const [user, setUser] = useState(null)

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true
    })
  }

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setUser({
      loggedIn: false
    })
  }

  useEffect(() => {
    const token = getCookie('x-auth-token')
    console.log(token)

    if (!token) {
      logOut()
      return
    }

    fetch('http://localhost:9999/api/user/verify', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(promise => {
      console.log(promise)
      return promise.json()
    }).then(response => {
      if (response.status) {
        logIn({
          username: response.user.username,
          id: response.user._id
        })
      } else {
        logOut()
      }
    })
  }, [])

  if (user === null) {
    return <img alt='loading' className={styles.loadingImg} src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' />
  }

  return (
    <UserContext.Provider value={{
      user,
      logIn,
      logOut
    }}>
      {props.children}
    </ UserContext.Provider>
  )
}

export default App