import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../../device'
import { logOutAction } from '../../../redux/actions/userAction'
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
      dispatch(logOutAction())
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
  background-color: white;
  box-shadow: 1px 1px 10px rgb(196, 196, 196);
  box-sizing: border-box;
  display: flex;
  min-width: 320px;

  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 0px 10px rgb(196, 196, 196);
  }
`
const Button = styled.button`
  cursor: pointer;
  background: white;
  border: none;
  padding: 0 100px;
  height: 50px;
  outline: none;
  font-size: 18px;
  padding: 10px 0;
  width: 100%;

  :hover {
    background: whitesmoke;
  }

  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    align-items: center;
    margin: auto;
    flex-direction: column;
    height: 40px;
  }

  @media ${device.tablet},
    ${device.laptop},
    ${device.laptopL},
    ${device.desktop} {
    width: 50vw;
  }
`

export default NavigationBar
