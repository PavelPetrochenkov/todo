import React from 'react'
import { useSelector } from 'react-redux'
import List from './components/List'
import Footer from './components/Footer'
import Header from './components/Header'
import { getTodosLength } from "./redux/selectors/todoSelectors";

function App() {

    const isTodosNotEmpty = !!useSelector(getTodosLength)

    return (
        <div className="todo-list">
            <Header />
            {isTodosNotEmpty && (
                <>
                    <List />
                    <Footer />
                </>
            )}
        </div>
    )
}

export default App
