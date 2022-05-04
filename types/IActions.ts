import {ITodos} from "./ITodos"
import {IFilter} from "./IFilter"
import {CHANGE_FILTERS, SET_FILTERS, SET_POSTS, SET_TODOS} from "@store/actionTypes"
import {IPost} from "./IPost"

export interface IActionCommon<T, P> {
    type: T
    payload: P
}

export type IAction =
    | IActionCommon<typeof CHANGE_FILTERS, {filterName: string, selected: string[]}>
    | IActionCommon<typeof SET_TODOS, {todos: ITodos[]}>
    | IActionCommon<typeof SET_FILTERS, {filters: IFilter[]}>
    | IActionCommon<typeof SET_POSTS, {posts: IPost[]}>

