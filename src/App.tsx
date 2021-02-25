import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import TodosPage from './pages/TodosPage'
import { getUserRequest } from './redux/actions/userAction'
import { getUserId } from './redux/selectors/userSelector'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.refreshToken) {
      dispatch(getUserRequest(localStorage.refreshToken))
    }
  }, [])

  const userId = useSelector(getUserId)

  return (
    <BrowserRouter>
      {!localStorage.refreshToken && !userId ? (
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
