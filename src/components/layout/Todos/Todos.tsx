import List from './Content/List'
import Footer from './Footer'
import Header from './Header'
import { useSelector } from 'react-redux'
import { getTodosLength } from "../../../redux/selectors/todoSelectors"

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
