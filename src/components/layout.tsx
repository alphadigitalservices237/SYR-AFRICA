
import React from 'react'
import InfoTopHeader from './infoTopHeader'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router'

const layout = () => {
    return (
        <div>
            <InfoTopHeader />
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}

export default layout
