import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import List from './components/List'
import Footer from './components/Footer'
import Header from './components/Header'
import { getTodosLength } from "./redux/selectors/todoSelectors"
import Authorization from './components/Authorization'
import NavigationBar from './components/NavigationBar'
import Registration from './components/Registration'

function App() {

    const isTodos:boolean = !!useSelector(getTodosLength);
    const [isLogInMode, setIsLogInMode] = useState<boolean>(false);
    const [isRegistrationMode, setIsRegistrationMode] = useState<boolean>(false);

    const showLogIn = () => {
        setIsLogInMode(true);
        setIsRegistrationMode(false);
    }

    const showRegistration = () => {
        setIsLogInMode(false);
        setIsRegistrationMode(true);
    }

    const showTodos = () => {
        setIsLogInMode(false);
        setIsRegistrationMode(false);
    }


    return (
        <StyledApp>
            <NavigationBar showLogIn={showLogIn} showRegistration={showRegistration} showTodos={showTodos}/>
            <StyledTodo>
            {
                isLogInMode && <Authorization/> 
                || isRegistrationMode && < Registration/> 
                || <>
                <Header />
                {isTodos && (
                    <>
                        <List />
                        <Footer />
                    </>
                )}</>
            }
            </StyledTodo>
            
        </StyledApp>
    )
}

const StyledApp = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center
`

const StyledTodo= styled.div`
    width: 550px;
    background-color: white;
    box-shadow: 1px 1px 10px rgb(196, 196, 196);
    box-sizing: border-box;
`

export default App
