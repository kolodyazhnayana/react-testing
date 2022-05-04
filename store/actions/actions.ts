import {CHANGE_FILTERS, SET_FILTERS, SET_POSTS, SET_TODOS} from "../actionTypes"
import {ITodos} from "@type/ITodos"
import {AppThunk} from "../store"
import {IFilter} from "@type/IFilter"
import {IPost} from "@type/IPost"
import NProgress from 'nprogress'
import {getTodos, getUserPosts} from "../../api"

//todos

export const actionSetTodos = (todos: ITodos[]) => ({
    type: SET_TODOS,
    payload: {
        todos: todos
    }
})

export const actionGetTodos = (): AppThunk => async (dispatch) => {
    NProgress.start()
    const res = await getTodos()
    if (res) {
        dispatch(actionSetTodos(res.data))
        NProgress.done()
        return res.data
    }
}

//filters

export const actionSetFilters = (filters: IFilter[]) => ({
    type: SET_FILTERS,
    payload: {
        filters: filters
    }
})

export const actionChangeFilters = (selected: string[], filterName: string) => ({
    type: CHANGE_FILTERS,
    payload: {
        selected: selected,
        filterName: filterName
    }
})

//posts

export const actionSetPosts = (posts: IPost[]) => ({
    type: SET_POSTS,
    payload: {
        posts: posts
    }
})

export const actionGetPosts = (userId: number): AppThunk => async (dispatch) => {
    NProgress.start()
    const res = await getUserPosts({userId: userId})
    if (res) {
        dispatch(actionSetPosts(res.data.slice(0, 5)))
        NProgress.done()
        return res.data.slice(0, 5)
    }

}


