import React from 'react'
import { useSelector } from 'react-redux'
import List from './components/List'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

    const isTodosEmpty = useSelector(({ todoReducer }) => !!todoReducer.todos.length)

    return (
        <div className="todo-list">
            <Header />
            {isTodosEmpty && (
                <>
                    <List />
                    <Footer />
                </>
            )}
        </div>
    )
}

export default App
