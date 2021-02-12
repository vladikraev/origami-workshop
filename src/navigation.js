import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Publications from './pages/publications'
import RegisterPage from './pages/register'
import ShareThoughtsPage from './pages/share-thoughts'
import LoginPage from './pages/login'

const Navigation = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Publications} />
        <Route path="/share" component={ShareThoughtsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation