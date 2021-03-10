import React, { Suspense, useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Publications from './pages/publications'
import RegisterPage from './pages/register'
import ShareThoughtsPage from './pages/share-thoughts'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import ErrorPage from './pages/error'
import UserContext from './Context'

const Navigation = () => {
  const context = useContext(UserContext)
  console.log(context)
  const loggedIn = context.user.loggedIn
  console.log(loggedIn)
  
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path="/" exact component={Publications} />
          <Route path="/share">
            {loggedIn ? <ShareThoughtsPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/register">
            {loggedIn ? <Redirect to="/share" /> : <RegisterPage />}
          </Route>
          <Route path="/login">
            {loggedIn ? <Redirect to='/share' /> : <LoginPage />}
          </Route>
          <Route path="/profile/:userid">
            {loggedIn ? <ProfilePage /> : <Redirect to="/" />}
          </Route>
          <Route component={ErrorPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation