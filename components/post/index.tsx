import {IPost} from "@type/IPost"
import Link from 'next/link'

const Post = ({title, body, id, todoId}: IPost) => {
    return (
        <div className='container'>
            <Link href={`/todos/${todoId}/${id}`}>
                <a>
                    <h3>{title}</h3>
                </a>
            </Link>
            <p>{body}</p>
        </div>
    )
}

export default Post
