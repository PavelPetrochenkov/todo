import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DescriptionIcon from '@material-ui/icons/Description';
import { useDispatch } from 'react-redux';
import { logOutAction } from '../../../redux/actions/userAction';

function NavigationBar() {
  const [isShow, setIsShow] = useState<boolean>(true)

  const dispatch = useDispatch()

  const handleNav = () => {
    setIsShow(!isShow)
  }

  const handleLogOut = () => {
    dispatch(logOutAction())
  }

  return (
    <StyledNavigationBar onClick={handleNav} show={isShow}>
      <Link to="/profile">
            <Button>Photo</Button>
          </Link>
      <Link to="/">
            <Button><HomeIcon/><ButtonText show={isShow}>Home</ButtonText></Button>
          </Link>
     {/* <Link to="/profile">
            <Button><AccountCircleIcon/><ButtonText show={isShow}>Profile</ButtonText></Button>
          </Link> */}
          <Link to="/tax">
            <Button><DescriptionIcon/><ButtonText show={isShow}>Tax</ButtonText></Button>
          </Link>
          <Link to="/file">
            <Button><AddCircleIcon/><ButtonText show={isShow}>Add File</ButtonText></Button>
          </Link>
          <Link to="/">
            <Button onClick={handleLogOut}><ExitToAppIcon/><ButtonText show={isShow}>Log out</ButtonText></Button>
          </Link>
    </StyledNavigationBar>
  )
}

const StyledNavigationBar = styled.div<{ show?: boolean }>`
width: ${(props) => (props.show ? '150px' : '70px')};
  height: 100vh;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-right:1px solid black;
  transition:all 1s;
  overflow:hidden;
  position:fixed;
  z-index:100;
`
const Button = styled.button`
  cursor: pointer;
  background: white;
  border: none;
  height: 50px;
  outline: none;
  font-size: 18px;
  padding: 10px 0;
  width: 100%;
  padding:50px 0;
  display:flex;
  align-items:center;

  :hover {
    color: blue;
  }
`
const ButtonText = styled.div<{ show?: boolean }>`
display: ${(props) => (props.show ? 'block' : 'none')};
transition:all 1s;
text-decoration:none;
`
export default NavigationBar
