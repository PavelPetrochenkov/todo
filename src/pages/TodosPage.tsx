import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isUserAuthorized } from '../redux/selectors/userSelector'
import Page from '../components/layout/Page/Page'
import Todos from '../components/layout/Todos/Todos'

function TodosPage() {

    const isAuthorized:boolean = useSelector(isUserAuthorized)

    const history = useHistory()

    useEffect(()=>{
        !isAuthorized && history.push('/login')
    },[isAuthorized])

    return (
        <Page>
            <Todos/>
        </Page>
    )
}

export default TodosPage