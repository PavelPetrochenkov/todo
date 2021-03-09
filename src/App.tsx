import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RestorePasswordPage from './pages/RestorePasswordPage'
import RegistrationPage from './pages/RegistrationPage'
import TodosPage from './pages/TodosPage'
import { getUserInfoAction } from './redux/actions/userAction'
import { getUserId } from './redux/selectors/userSelector'

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
          <Route path="/" component={TodosPage} />
        </Switch>
      )}
    </BrowserRouter>
  )
}

export default App
