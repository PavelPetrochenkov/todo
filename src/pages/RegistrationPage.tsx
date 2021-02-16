import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isUserAuthorized } from '../redux/selectors/userSelector'
import Page from '../components/layout/Page/Page'
import Registration from '../components/layout/Registration/Registration'

function RegistrationPage() {

    const isAuthorized:boolean = useSelector(isUserAuthorized)

    const history = useHistory()

    useEffect(()=>{
        isAuthorized && history.push('/')
    },[isAuthorized])
    
    return (
        <Page>
            <Registration/>
        </Page>
    )
}

export default RegistrationPage