import '../styles/global.css'

export default function App({ Component, pageProps }) {
  console.log('_app.js rendering')
  return <Component {...pageProps} />
}
