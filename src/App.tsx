import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RestorePasswordPage from './pages/RestorePasswordPage'
import RegistrationPage from './pages/RegistrationPage'
import { getUserInfoAction } from './redux/actions/userAction'
import { getUserId } from './redux/selectors/userSelector'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import FilePage from './pages/FilePage'
import TaxPage from './pages/TaxPage'
import FileViewPage from './pages/FileViewPage'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.refreshToken) {
      dispatch(getUserInfoAction.request(localStorage.refreshToken))
    }
  }, [])

  const userId = useSelector(getUserId)

  return (
    <BrowserRouter>
      {!localStorage.refreshToken && !userId ? (
        <Switch>
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route
            exact
            path="/password/restore"
            component={RestorePasswordPage}
          />
          <Route path="/" component={LoginPage} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/tax" component={TaxPage} />
          <Route exact path="/file/info/:id" component={FileViewPage} />
          <Route exact path="/file" component={FilePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      )}
    </BrowserRouter>
  )
}

export default App
