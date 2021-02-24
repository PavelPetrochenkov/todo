import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import TodosPage from './pages/TodosPage'
import { getIsUserAuthorized } from './redux/selectors/userSelector'

function App() {
  const isAuthorized: boolean = useSelector(getIsUserAuthorized)
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
