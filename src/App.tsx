import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import List from './components/List'
import Footer from './components/Footer'
import Header from './components/Header'
import { getTodosLength } from "./redux/selectors/todoSelectors";

function App() {

    const isTodos:boolean = !!useSelector(getTodosLength)

    return (
        <StyledApp>
            <Header />
            {isTodos && (
                <>
                    <List />
                    <Footer />
                </>
            )}
        </StyledApp>
    )
}

const StyledApp = styled.div`
    width: 550px;
    background-color: white;
    box-shadow: 1px 1px 10px rgb(196, 196, 196);
    box-sizing: border-box;
`

export default App
