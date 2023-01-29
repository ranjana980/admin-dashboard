import React, { useState } from 'react'
import AlertIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector, useDispatch } from "react-redux";
export default function Navbar() {
  const navigate = useNavigate()
  const [Open, setOpen] = useState(false)
  const FormData = useSelector((state) => state.FormDataReducer);
  const { isMobile } = FormData
  const dispatch = useDispatch()
  return (
    <>
      <div className='bg-white drop-shadow-lg h-[60px]'>
        <div className='flex justify-between pl-5 pr-5'>
          <div className='mt-3 text-teal-500 lg:hidden xl:hidden md:hidden sm:block xs:block' onClick={()=>{dispatch({type:'MOBILE',payload:!isMobile})}}>
            <MenuIcon />
          </div>

          <div>
            <img src='https://suvidhacsp.com/img/logo_new.jpg' className='w-[150px] ' />
          </div>
          <div className='flex p-2'>
            <div className=' flex border-r-2 border-gray-400 mt-2 h-[30px] mr-5'>
              <AlertIcon className='text-gray-300 mr-10' />
              <EmailIcon className='text-gray-300 mr-10' />
            </div>
            <img src='https://suvidhacsp.com/profile_picture/1.png' className='w-[50px] p-2  cursor-pointer' onClick={() => setOpen(!Open)} />
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
