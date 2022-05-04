import {IFilter} from "@type/IFilter"
import FilterSelect from "../filterSelect"
import {MultiValue} from "react-select"
import {useDispatch} from "react-redux"
import {actionChangeFilters} from "@store/actions/actions"
import {FiltersHelper} from "@helpers/FiltersHelper"

const Filter = ({filter}: {filter: IFilter}) => {
    const nameOfFilter = FiltersHelper.getName(filter)
    const dispatch = useDispatch()

    const options = filter[nameOfFilter].options?.map(option => (
        {
            label: option,
            value: option
        }
    ))

    const updateValue = (newValue: MultiValue<{ value: string; label: string; }>, type: string) => {
        const values = newValue.map(item => item.value)
        dispatch(actionChangeFilters(values, type))
    }

    return (
        <>
            <FilterSelect
                options={options}
                updateValue={(newValue) => updateValue(newValue, nameOfFilter)}
                placeholder={nameOfFilter}
            />
        </>
    )
}

export default Filter
