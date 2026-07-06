import '../styles/globals.css'
import { barlow, barlowCondensed } from '../lib/fonts'

export default function App({ Component, pageProps }) {
  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable} font-root`}>
      <Component {...pageProps} />
    </div>
  )
}
