import Select, {MultiValue} from "react-select"
import s from './index.module.css'

interface IFilterSelect {
    options: {
        value: string,
        label: string
    }[],
    updateValue: (newValue: MultiValue<{ value: string; label: string; }>) => void,
    placeholder: string
}

export const FilterSelect = ({options, updateValue, placeholder}: IFilterSelect) => {
    const handleChange = (newValue: MultiValue<{ value: string; label: string; }>) => {
        updateValue(newValue)
    }

    return (
        <div className={s.container}>
            <Select
                options={options}
                onChange={handleChange}
                isMulti
                placeholder={placeholder}
            />
        </div>
    )
}

export default FilterSelect
