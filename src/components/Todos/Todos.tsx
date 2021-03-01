import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from './Content/List'
import Footer from './Footer'
import Header from './Header'
import { getIsTodosNotEmpty } from '../../redux/selectors/todoSelectors'
import { getUserId } from '../../redux/selectors/userSelector'
import { disconnectSocket, initSocket } from '../../socket'
import { getAllTodosRequest } from '../../redux/actions/todoAction'

function Todos() {
  const dispatch = useDispatch()
  const isTodosNotEmpty: boolean = useSelector(getIsTodosNotEmpty)
  const userId: string = useSelector(getUserId)

  useEffect(() => {
    if (!!userId && !!localStorage.token) {
      initSocket(
        userId,
        localStorage.token,
        localStorage.refreshToken,
        dispatch
      )
    }
    dispatch(getAllTodosRequest(userId))
    return function cleanup() {
      disconnectSocket()
    }
  }, [userId])

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
