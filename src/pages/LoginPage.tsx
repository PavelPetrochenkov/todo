import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Login from '../components/layout/Login/Login'
import Page from '../components/layout/Page/Page'
import { isUserAuthorized } from '../redux/selectors/userSelector'

function LoginPage() {

    const isAuthorized:boolean = useSelector(isUserAuthorized)

    const history = useHistory()

    useEffect(()=>{
        isAuthorized && history.push('/')
    },[isAuthorized])

    return (
        <Page>
            <Login/>
        </Page>
    )
}

export default LoginPage