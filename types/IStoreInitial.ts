import {ITodos} from "./ITodos"
import {IFilter} from "./IFilter"
import {IPost} from "./IPost"

export interface IStoreInitial {
    todos: ITodos[],
    filters: IFilter[],
    posts: IPost[]
}
