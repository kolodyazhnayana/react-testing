import s from './index.module.css'

interface ICheckbox {
    label: string,
    completed?: boolean,
    name: string
}

const Checkbox = ({label, completed, name}: ICheckbox) => {
    return (
        <div className={s.container}>
            <input
                type='checkbox'
                name={name}
                checked={completed}
                readOnly={true}
            />
           <label className={s.label}>{label}</label>
        </div>
    )
}

export default Checkbox
