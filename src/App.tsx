import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import TodosPage from './pages/TodosPage'

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/registration' component={RegistrationPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/' component={TodosPage}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App
