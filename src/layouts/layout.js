import React from 'react'
import Navbar from '../components/navbar/navbar.component'
import Footer from '../components/footer/footer.component'

import './layout.styles.scss'

const Layout = ({children}) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
