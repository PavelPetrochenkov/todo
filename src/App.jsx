import React from 'react'
import { useSelector } from 'react-redux'
import List from './components/List'
import Footer from './components/Footer'
import Header from './components/Header'
import { getTodosLength } from "./redux/selectors/todoSelectors";
import { StyledApp } from './styled-components/App'

function App() {

    const isTodos = !!useSelector(getTodosLength)

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

export default App
