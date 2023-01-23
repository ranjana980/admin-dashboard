import React from 'react'
import DashBoard from './Components/DashBoard'
import Navbar from './Components/NavBar/Navbar'
import SideNavbar from './Components/NavBar/SideNavbar'

export default function DefaultLayout() {
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-1'>
                    <SideNavbar/>
                </div>
                <div className='col-span-11'>
                    <Navbar />
                    <DashBoard/>
                </div>

            </div>

        </div>
    )
}
