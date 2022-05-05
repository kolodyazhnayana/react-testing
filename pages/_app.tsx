import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper, store } from "@store/store"
import { Provider } from "react-redux"
import 'nprogress/nprogress.css'

function App({ Component, pageProps }: AppProps) {
    console.log('from app')

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default wrapper.withRedux(App)
