import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { isUserAuthorized } from '../redux/selectors/userSelector'

type NavigationBarProps = {
    showLogIn:()=>void,
    showTodos:()=>void,
    showRegistration:()=>void
}

function NavigationBar({showLogIn, showTodos, showRegistration}:NavigationBarProps) {

    const isAuthorized:boolean = useSelector(isUserAuthorized)

    return (
        <StyledNavigationBar>
        <Button onClick={showTodos}>Todos</Button>
        {isAuthorized
        ?
        <Button>Log out</Button>
        :
        <>
        <Button onClick={showLogIn}>Log in</Button>
        <Button onClick={showRegistration}>Registration</Button>
        </>
        }
        </StyledNavigationBar>
    )
}

const StyledNavigationBar = styled.div`
    width:100vw;
    margin-bottom:50px;
    line-height:50px;
    background-color: white;
    box-shadow: 1px 1px 10px rgb(196, 196, 196);
    box-sizing: border-box;
    display:flex;
`
const Button = styled.button`
    width:100%;
    cursor:pointer;
    background:white;
    border:none;
    padding:0 100px;
    line-height:50px;
    outline:none;
    font-size:18px;

    :hover{
        background:whitesmoke;
    }
`

export default NavigationBar
