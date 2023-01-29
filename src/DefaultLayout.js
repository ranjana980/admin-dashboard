import React, { useEffect } from 'react'
import DashBoard from './Components/DashBoard'
import Navbar from './Components/NavBar/Navbar'
import SideNavbar from './Components/NavBar/SideNavbar'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

export default function DefaultLayout() {
    const navigate = useNavigate()
    const FormData = useSelector((state) => state.FormDataReducer);
    const { Menu,isMobile} = FormData
    useEffect(() => {
        if ((localStorage.getItem('LoginStatus') == 'Login')) {
            console.log('login')
            navigate('/DefaultLayout')
        }
        else {
            navigate('/')
        }
    }, [])
    return (
        // <div>
            <div className='grid grid-cols-12'>
                <div className={`${Menu?'lg:col-span-2':'lg:col-span-1'} ${Menu?'md:col-span-2':'md:col-span-1'} ${Menu?'xl:col-span-2':'xl:col-span-1'}  ${isMobile?'sm:block sm:col-span-2':'sm:hidden sm:col-span-0'} ${isMobile?'xs:block xs:col-span-2':'xs:hidden xs:col-span-0'} md:block lg:block xl:block`}>
                    <SideNavbar />
                </div>
                <div className={`${Menu?'lg:col-span-10':'lg:col-span-11'} ${Menu?'md:col-span-10':'md:col-span-11'} ${Menu?'xl:col-span-10':'xl:col-span-11'} ${isMobile?' sm:col-span-10':' sm:col-span-12'} ${isMobile?' xs:col-span-10':' xs:col-span-12'}`}>
                    <Navbar />
                    <DashBoard />
                </div>

            </div>

        // </div>
    )
}
