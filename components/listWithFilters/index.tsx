import Card from "../card"
import {ITodos} from "@type/ITodos"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {actionSetFilters} from "@store/actions/actions"
import {createFilters} from "@helpers/createFilters"
import Filters from '../filters/index'
import {AppState} from "@store/store"
import {FiltersHelper} from "@helpers/FiltersHelper"

interface IListWithFilters {
    todos: ITodos[],
    indexes: number[]
}

const ListWithFilters = ({todos, indexes}: IListWithFilters) => {
    const dispatch = useDispatch()
    const [todoList, setTodoList] = useState<ITodos[]>()
    const filters = useSelector(({filters}: AppState) => (filters))

    useEffect(() => {
        setTodoList(todos)
    }, [todos])

    useEffect(() => {
        (async () => {
            const filters = createFilters(todos, indexes)
            dispatch(actionSetFilters(filters))
        })()
    }, [indexes])

    useEffect(() => {
        const filteredList = FiltersHelper.filterTodos(filters, todos)
        setTodoList(filteredList)
    }, [filters])

    return (
        <div>
            <Filters />
            <h1>Todos</h1>
            {
                todoList && todoList.map(item =>
                    <Card
                        key={item.id}
                        userId={item.userId}
                        title={item.title}
                        completed={item.completed}
                        id={item.id}
                    />
                )
            }
        </div>
    )
}

export default ListWithFilters
