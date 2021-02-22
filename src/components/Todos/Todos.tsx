import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ACTIONS_TODO } from '../../constants'
import List from './Content/List'
import Footer from './Footer'
import Header from './Header'
import { isTodosHaveTodo } from '../../redux/selectors/todoSelectors'
import { getAllTodosPending } from '../../redux/actions/todoAction'
import { getUserId } from '../../redux/selectors/userSelector'

function Todos() {
  const dispatch = useDispatch()

  const userId: string | undefined = useSelector(getUserId)

  useEffect(() => {
    dispatch(getAllTodosPending(userId))
  }, [])

  const isTodos: boolean = useSelector(isTodosHaveTodo)

  return (
    <>
      <Header />
      {isTodos && (
        <>
          <List />
          <Footer />
        </>
      )}
    </>
  )
}

export default Todos
