import React from 'react'
import Navbar from '../components/navbar/navbar.component'
import Footer from '../components/footer/footer.component'

import './layout.styles.scss'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
                <div className="container">
                    {children}
                </div>
            <Footer />
        </>
    )
}

export default Layout
