import { HouseContextProvider } from '@/contexts/HouseContext'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HouseContextProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </HouseContextProvider>
  )
  
}
