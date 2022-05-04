import {StoreInitial} from "../storeInitial"
import {CHANGE_FILTERS, SET_FILTERS, SET_POSTS, SET_TODOS} from "../actionTypes"
import {IAction} from "@type/IActions"
import {FiltersHelper} from "@helpers/FiltersHelper"

const reducer = (state = StoreInitial, action: IAction) => {
     switch (action.type) {
        case SET_TODOS:
        case SET_FILTERS:
        case SET_POSTS:
            return {
                ...state,
                ...action.payload
            }

        case CHANGE_FILTERS:
            const filter = FiltersHelper.getFilterByName(action.payload.filterName, state.filters)
            if (!filter) return

            const newFilter = {
                [action.payload.filterName]: {
                    options: filter[action.payload.filterName].options,
                    selected: action.payload.selected
                }
            }


            return {
                ...state,
                filters: [
                    ...state.filters.filter(item => FiltersHelper.getName(item) !== action.payload.filterName),
                    newFilter
                ]
            }
        default: {
            return {...state}
        }
    }
}

export default reducer
