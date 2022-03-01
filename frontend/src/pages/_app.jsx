import React, { useState } from 'react'
// Styles
import '../styles/globals.scss'
// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function App({Component, pageProps}){
    const [isModalVisible, setIsModalVisible] = useState(false)
    return(
        <>
        <div className="wrap">
            <Header modal="modalOpenned"/>
            <Component {...pageProps}/>
            <Footer />
        </div>
        </>
    )
}

export default App