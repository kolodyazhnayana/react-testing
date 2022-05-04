import {useSelector} from "react-redux"
import {AppState} from "@store/store"
import Filter from '../filter/index'
import s from './index.module.css'
import {FiltersHelper} from "@helpers/FiltersHelper"

const Filters = () => {
    const filters = useSelector(({filters}: AppState) => filters)

    return (
        <>
            <h1>Filters</h1>
            <div className={s.filters}>
                {
                    filters.sort(FiltersHelper.compare).map((filter) => <Filter key={FiltersHelper.getName(filter)} filter={filter} />)
                }
            </div>
        </>
    )
}

export default Filters
