import {NextPage} from "next"
import {useEffect} from "react"
import {useRouter} from "next/router"

const Home: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/todos')
    }, [router])

    return (
        <div>

        </div>
    )
}

export default Home




