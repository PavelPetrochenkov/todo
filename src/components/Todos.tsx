import List from '../components/List'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { getTodosLength } from "../redux/selectors/todoSelectors"

function Todos() {

    const isTodos:boolean = !!useSelector(getTodosLength);

    return (
        <>
        <Header />
        {isTodos && (
            <>
                <List />
                <Footer />
            </>
        )}
        </>
    )
}

export default Todos
