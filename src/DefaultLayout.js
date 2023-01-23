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
                <div className='col-span-1'>
                    <SideNavbar />
                </div>
                <div className='col-span-11'>
                    <Navbar />
                    <DashBoard />
                </div>

            </div>

        </div>
    )
}
