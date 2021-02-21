import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Publications from './pages/publications'
import RegisterPage from './pages/register'
import ShareThoughtsPage from './pages/share-thoughts'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import ErrorPage from './pages/error'

const Navigation = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path="/" exact component={Publications} />
          <Route path="/share" component={ShareThoughtsPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile/:userid" component={ProfilePage} />
          <Route component={ErrorPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation