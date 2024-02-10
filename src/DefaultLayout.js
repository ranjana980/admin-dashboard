import React, { useEffect } from 'react'
import DashBoard from './Components/DashBoard'
import Navbar from './Components/NavBar/Navbar'
import SideNavbar from './Components/NavBar/SideNavbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from '@material-ui/core'

export default function DefaultLayout() {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const FormData = useSelector((state) => state.FormDataReducer);
    const { Menu,isMobile} = FormData

    useEffect(() => {
        if ((localStorage.getItem('LoginStatus') == 'Login')) {
            navigate('/dashboard')
        }
        else {
            navigate('/')
        }
    }, [])
    
    return (
            <div className='grid grid-cols-12'>
                <div className={`${Menu?'lg:col-span-2  xl:col-span-2':'lg:col-span-1 md:col-span-1 xl:col-span-1'}   ${isMobile?'md:block sm:block sm:col-span-2 xs:block xs:col-span-2':'md:hidden sm:hidden sm:col-span-0 xs:hidden xs:col-span-0'}  lg:block xl:block `}>
                   {isMobile?<Drawer open={isMobile} anchor='left' onClose={()=>  { dispatch({ type: 'MOBILE', payload: !isMobile }) }}>
                    <SideNavbar />
                    </Drawer>: <SideNavbar />}
                   
                </div>
                <div className={`${Menu?'lg:col-span-10  xl:col-span-10':'lg:col-span-11 md:col-span-11 xl:col-span-11'}   ${isMobile?'md:col-span-10 sm:col-span-10 xs:col-span-10':'md:col-span-12 sm:col-span-12  xs:col-span-12'} `}>
                    <Navbar />
                    <DashBoard />
                </div>
            </div>
    )
}
