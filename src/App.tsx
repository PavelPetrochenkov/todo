import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import TodosPage from './pages/TodosPage'
import { getIsUserAuthorized } from './redux/selectors/userSelector'
import { getUserRequest } from './redux/actions/userAction'

function App() {
  const dispatch = useDispatch()

  const isAuthorized: boolean = useSelector(getIsUserAuthorized)
  useEffect(() => {
    if (localStorage.refreshToken) {
      dispatch(getUserRequest(localStorage.refreshToken))
    }
  }, [])
  return (
    <BrowserRouter>
      {!isAuthorized ? (
        <Switch>
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/login" component={LoginPage} />
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
