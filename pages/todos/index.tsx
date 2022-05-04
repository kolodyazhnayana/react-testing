import {useEffect} from "react"
import {actionGetTodos} from "@store/actions/actions"
import {AppState} from "@store/store"
import ListWithFilters from "@components/listWithFilters"
import {connect, ConnectedProps} from 'react-redux'
import {ITodos} from "@type/ITodos"

const mapState = (state: AppState) => ({
    todos: state.todos,
})

const mapDispatch = {
    getTodos: () => actionGetTodos()
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
    todos: ITodos[],
    getTodos: () => void
}

const Todos = ({todos, getTodos}: Props) => {
    useEffect(() => {
        (async () => {
            getTodos()
        })()
    }, [getTodos])

    return (
        <div className='container'>
            {
                todos && <ListWithFilters todos={todos} indexes={[0, 3]} />
            }
        </div>
    )
}

export default connector(Todos)




