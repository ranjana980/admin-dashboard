import React, { useState } from 'react'
import { Notifications, Email, Menu } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assests/images/admin.png";

export default function Navbar() {
  const navigate = useNavigate()
  const [Open, setOpen] = useState(false)
  const { FormDataReducer } = useSelector((state) => state);
  const { isMobile } = FormDataReducer
  const dispatch = useDispatch()

  return (
    <>
      <div className='bg-white drop-shadow-lg h-[60px]'>
        <div className='flex justify-between pl-5 pr-5'>
          <div className='mt-3 text-teal-500 lg:hidden xl:hidden md:block sm:block xs:block' onClick={() => 
            { dispatch({ type: 'MOBILE', payload: !isMobile }) }}>
            <Menu />
          </div>
          <div>
            <img src={logo} height={50} width={50} className='rounded-full mt-2 hidden lg:block xl:block' />
          </div>
          <div className='flex p-2'>
            <div className=' flex border-r-2 border-gray-400 mt-2 h-[30px] mr-5'>
              <Notifications className='text-gray-300 mr-10' />
              <Email className='text-gray-300 mr-10' />
            </div>
            <img src={logo} height={50} width={50} className='rounded-full p-2  cursor-pointer' onClick={() => setOpen(!Open)} />
          </div>
        </div>
      </div>
      {Open ? <div className=' bg-white absolute right-5 rounded-[3px] w-[70px] h-[40px] drop-shadow-lg cursor-pointer' onClick={() => {
        localStorage.removeItem('LoginStatus')
        navigate('/')
        swal('LogOut SuccessFully')
      }}>
        <p className='p-1 text-center'>LogOut</p>
      </div> : ""}</>
  )
}
