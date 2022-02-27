import React from 'react'
// Styles
import '../styles/globals.scss'
// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function App({Component, pageProps}){
    return(
        <>
        <div className="wrap">
            <Header />
            <Component {...pageProps}/>
            <Footer />
        </div>
        </>
    )
}

export default App