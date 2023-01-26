import React,{useEffect}from 'react'
import DashBoard from './Components/DashBoard'
import Navbar from './Components/NavBar/Navbar'
import SideNavbar from './Components/NavBar/SideNavbar'
import { Link ,useNavigate} from 'react-router-dom'
export default function DefaultLayout() {
    const navigate = useNavigate()

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
        <div>
            <div className='grid grid-cols-12'>
                <div className='lg:col-span-1 md:col-span-1 sm:col-span-0 xs:col-span-0 sm:hidden xs:hidden md:block lg:block'>
                    <SideNavbar />
                </div>
                <div className='lg:col-span-11 md:col-span-11 sm:col-span-12 xs:col-span-12'>
                    <Navbar />
                    <DashBoard />
                </div>

            </div>

        </div>
    )
}
