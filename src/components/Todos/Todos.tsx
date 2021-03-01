import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import List from './Content/List'
import Footer from './Footer'
import Header from './Header'
import { getIsTodosNotEmpty } from '../../redux/selectors/todoSelectors'
import { getAllTodosRequest } from '../../redux/actions/todoAction'
import { getUserId } from '../../redux/selectors/userSelector'

function Todos() {
  const dispatch = useDispatch()

  const userId: string = useSelector(getUserId)

  useEffect(() => {
    !!userId && dispatch(getAllTodosRequest(userId))
  }, [userId])

  const isTodosNotEmpty: boolean = useSelector(getIsTodosNotEmpty)

  return (
    <>
      <Header />
      {isTodosNotEmpty && (
        <>
          <List />
          <Footer />
        </>
      )}
    </>
  )
}

export default Todos
