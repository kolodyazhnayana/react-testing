import * as r from './requests'
import {GET_POSTS, GET_TODOS, GET_USERS} from "./endpoints"

//todos
export const getTodos = () => r.get('getTodos', GET_TODOS)
export const getTodo = (data: {id: number}) => r.get('getTodo', GET_TODOS, data)

//posts
export const getPosts = () => r.get('getPosts', GET_POSTS)
export const getUserPosts = (data: {userId: number}) => r.get('getUserPosts', GET_POSTS, data)
export const getPost = (data: {id: number}) => r.get('getPost', GET_POSTS, data)

//users
export const getUser = (data: {id: number}) => r.get('getUser', GET_USERS, data)
