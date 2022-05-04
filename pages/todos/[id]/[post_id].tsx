import {GetStaticPaths, GetStaticProps} from "next"
import {IPost} from "@type/IPost"
import {getPost} from "../../../api"

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: [] = []
    return ({
        paths,
        fallback: 'blocking'
    })
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const res = await getPost({id: Number(params?.post_id)})
    const post: IPost = res?.data[0]

    return {
        props: {
            post: post
        },
        revalidate: 10
    }
}

const PostInner = ({post}: {post: IPost}) => {
    const {title, body} = post

    return (
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostInner
