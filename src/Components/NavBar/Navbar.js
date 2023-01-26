import React from 'react'
import AlertIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email'

export default function Navbar() {
  return (
    <div className='bg-white drop-shadow-lg h-[60px]'>
      {/* <h1>Top Navigation</h1> */}
      <div className='flex justify-between pl-5 pr-5'>
        <div>
          <img src='https://suvidhacsp.com/img/logo_new.jpg' className='w-[150px] ' />
        </div>
        <div className='flex p-2'>
          <div className=' flex border-r-2 border-gray-400 mt-2 h-[30px] mr-5'>
            <AlertIcon className='text-gray-300 mr-10' />
            <EmailIcon className='text-gray-300 mr-10' />
          </div>
          <img src='https://suvidhacsp.com/profile_picture/1.png' className='w-[50px] p-2' />
        </div>
      </div>
    </div>
  )
}
