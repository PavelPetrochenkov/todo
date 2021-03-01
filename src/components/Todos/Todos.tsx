import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import List from './Content/List'
import Footer from './Footer'
import Header from './Header'
import { getIsTodosNotEmpty } from '../../redux/selectors/todoSelectors'
import { getUserId } from '../../redux/selectors/userSelector'

function Todos() {
  const userId: string = useSelector(getUserId)

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
