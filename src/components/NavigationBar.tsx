import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { isUserAuthorized } from '../redux/selectors/userSelector'

interface INavigationBar{
    showLogIn:()=>void,
    showTodos:()=>void,
    showRegistration:()=>void
}

function NavigationBar({showLogIn, showTodos, showRegistration}:INavigationBar) {

    const isAuthorized:boolean = useSelector(isUserAuthorized)

    return (
        <StyledNavigationBar>
        <StyledButton onClick={showTodos}>Todos</StyledButton>
        {isAuthorized
        ?
        <StyledButton>Log out</StyledButton>
        :
        <>
        <StyledButton onClick={showLogIn}>Log in</StyledButton>
        <StyledButton onClick={showRegistration}>Registration</StyledButton>
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
const StyledButton = styled.button`
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
