import {AxiosResponse} from "axios"
import {DEBUG} from "../config"

export default function log (name: string, type: string, data?: AxiosResponse | {}) {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const sec = date.getSeconds()
    const ms = date.getMilliseconds()

    if (DEBUG) {
        if (type === 'request') {
            console.log(`%c [request] ${name}`, 'background: #222; color: #00FF00')
            console.log(`${hours}:${minutes}:${sec}:${ms}`)
            console.log(data)
            console.log('%c ...................', 'background: #222; color: #00FF00')
        }
        if (type === 'response') {
            console.log(`%c [response] ${name}`, 'background: #222; color: #00FFFF')
            console.log(`${hours}:${minutes}:${sec}:${ms}`)
            console.log(data)
            console.log('%c ...................', 'background: #222; color: #00FFFF')
        }
        if (type === 'catch') {
            console.log(`%c [catch] ${name}`, 'background: #222; color: #dc3545')
            console.log(data)
            console.log('%c ...................', 'background: #222; color: #dc3545')
        }
    }
}
