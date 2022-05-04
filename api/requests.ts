import axios from "axios"
import log from "../utils/log"

export const get = (reqName: string, endpoint: string, data?: { [key: string]: string | number }) => {
    log(reqName, 'request', data)

    return axios.get(
        endpoint, {
            params: data
        }
    )
        .then(function (response) {
            log(reqName, 'response', response)
            return response
    })
        .catch(function (error) {
            log(reqName, 'catch', error)
        })
}
