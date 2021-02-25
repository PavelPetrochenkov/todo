import { useEffect } from 'react'
import Page from '../components/layout/Page/Page'
import Todos from '../components/Todos/Todos'
import { useHistory } from 'react-router-dom'

function TodosPage() {
  const history = useHistory()

  useEffect(() => {
    if (!localStorage.refreshToken) history.push('/login')
  }, [])

  return (
    <Page>
      <Todos />
    </Page>
  )
}

export default TodosPage
