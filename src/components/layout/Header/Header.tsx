import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { logOut } from '../../../redux/actions/userAction'
import { getUser } from '../../../redux/selectors/userSelector'
import { User } from '../../../typescript/User'

function NavigationBar() {
  const user: User = useSelector(getUser)

  const history = useHistory()

  const dispatch = useDispatch()

  const handleLogOut = useCallback(() => {
    localStorage.clear()
    history.push('/login')
  }, [])

  useEffect(() => {
    if (!localStorage.refreshToken && user.id) {
      dispatch(logOut())
    }
  })

  return (
    <StyledNavigationBar>
      {!!localStorage.refreshToken ? (
        <>
          <Link to="/">
            <Button>Todos</Button>
          </Link>
          <Button onClick={handleLogOut}>Log out ({user.login})</Button>
        </>
      ) : (
        <>
          <Link to="/login">
            <Button>Log in</Button>
          </Link>
          <Link to="/registration">
            <Button>Registration</Button>
          </Link>
        </>
      )}
    </StyledNavigationBar>
  )
}

const StyledNavigationBar = styled.div`
  width: 100vw;
  margin-bottom: 50px;
  line-height: 50px;
  background-color: white;
  box-shadow: 1px 1px 10px rgb(196, 196, 196);
  box-sizing: border-box;
  display: flex;
`
const Button = styled.button`
  width: 50vw;
  cursor: pointer;
  background: white;
  border: none;
  padding: 0 100px;
  max-height: 50px;
  min-height: 50px;
  outline: none;
  font-size: 18px;

  :hover {
    background: whitesmoke;
  }
`

export default NavigationBar
