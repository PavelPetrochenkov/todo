import List from './Content/List'
import Footer from './Footer'
import Header from './Header'
import { useSelector } from 'react-redux'
import { isTodosHaveTodo } from '../../redux/selectors/todoSelectors'

function Todos() {
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
