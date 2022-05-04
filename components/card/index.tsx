import {ITodos} from "@type/ITodos"
import s from './index.module.css'
import Checkbox from "../checkbox"
import Link from 'next/link'

const Card = ({userId, title, completed, id}: ITodos) => {
    return (
        <div className={s.container}>
            <div>userId: {userId}</div>
            <Link href={`/todos/${id}`}>
                <a>
                    <Checkbox label={title} name={title} completed={completed} />
                </a>
            </Link>
        </div>
    )
}

export default Card
