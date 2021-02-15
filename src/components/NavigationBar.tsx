import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { isUserAuthorized } from '../redux/selectors/userSelector'

function NavigationBar() {

    const isAuthorized:boolean = useSelector(isUserAuthorized)

    return (
        <StyledNavigationBar>
        <Link to="/">
        <Button >Todos</Button>
        </Link>
        {isAuthorized
        ?
        <Button>Log out</Button>
        :
        <>
        <Link to="/authorization">
        <Button >Log in</Button>
        </Link>
        <Link to="/registration">
        <Button >Registration</Button>
        </Link>
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
    width:33.3vw;
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
