import {GetStaticPaths, GetStaticProps} from "next"
import {IUser} from "@type/IUser"
import {ITodos} from "@type/ITodos"
import Checkbox from "@components/checkbox"
import {useEffect} from "react"
import Post from "@components/post"
import {Dispatch} from "redux"
import {useDispatch, useSelector} from "react-redux"
import {actionGetPosts} from "@store/actions/actions"
import {AppState} from "@store/store"
import {getTodo, getTodos, getUser} from "../../../api"

//another branch

export const getStaticPaths: GetStaticPaths = async () => {
    const todos = await getTodos()
    const paths = todos?.data.map((todo: ITodos) => ({
        params: { id: String(todo.id) }
    }))

    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const {params} = ctx

    const todos = await getTodo({id: Number(params?.id)})
    const todo: ITodos = todos?.data[0]

    const users = await getUser({id: todo.userId})
    const user: IUser = users?.data[0]

    return {
        props: {
            todo: todo,
            user: user
        },
        revalidate: 10
    }
}

const TodoInner = ({todo, user}: {todo: ITodos, user: IUser}) => {
    const {title, completed, id} = todo
    const {name} = user

    const dispatch: Dispatch<any> = useDispatch()
    const posts = useSelector(({posts}: AppState) => (posts))

    useEffect(() => {
        (async () => {
            dispatch(actionGetPosts(user.id))
        })()
    }, [])

    return (
        <div className='container'>
            <h2>{name}</h2>
            <Checkbox label={title} name={title} completed={completed} />
            {
                posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} todoId={id} />)
            }
        </div>
    )
}

export default TodoInner
