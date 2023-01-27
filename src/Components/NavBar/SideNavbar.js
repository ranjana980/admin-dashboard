import React, { useState } from 'react'
import GroupsIcon from '@material-ui/icons/Group';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import ListIcon from '@material-ui/icons/ListAlt';
import SummarizeIcon from '@material-ui/icons/InsertDriveFile';
import SettingsIcon from '@material-ui/icons/Settings';
import AlertIcon from '@material-ui/icons/Notifications';
import AirplaneTicketIcon from '@material-ui/icons/AirplanemodeActiveRounded';
import EmailIcon from '@material-ui/icons/Email'
import FileDownloadSharpIcon from '@material-ui/icons/GetAppSharp';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowLeft';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'

export default function SideNavbar() {
  // const [Menu,setMenu]=useState(false)
  const navigate = useNavigate()

  const FormData = useSelector((state) => state.FormDataReducer);
  const { Menu } = FormData
  const dispatch = useDispatch()
  return (
    <div className={`text-white  ${Menu ? 'w-[190px]' : 'w-[90px]'}`}>
      <div className={` cursor-pointer text-center border-b  solid border-teal-200 ${Menu ? 'flex p-3' : 'block'}`} onClick={() => navigate('/DefaultLayout')}>
        <i className="fa fa-tachometer text-sm text-white" style={{ fontSize: '20px' }} aria-hidden="true"></i>
        <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>DashBoard</h6>
      </div>
      {/* <div className={`${Menu?'block':'flex'} `}> */}
        <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
          <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
            <GroupsIcon style={{ fontSize: '20px' }} />
            <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Members</h6>
          </div>

          {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='' /> : ""}

        </div>
        <div className='bg-white   ml-3 p-2 rounded-[5px]'>
          <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/MemberList')}>
            <p className='p-[4px] text-black leading-[5px]'>Member List</p>
          </div>
          <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
            <p className='p-[4px] text-black leading-[5px]' >Add Member</p>
          </div>
        </div>
      {/* </div> */}
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <AddShoppingCart style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Request</h6>
        </div>
        {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='cursor-pointer' /> : ""}
      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <ListIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>History</h6>
        </div>
        {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='cursor-pointer' /> : ""}
      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <SummarizeIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Report</h6>
        </div>
        {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='cursor-pointer' /> : ""}
      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <SettingsIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Settings</h6>
        </div>
        {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='cursor-pointer' /> : ""}
      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <AlertIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Notice Board</h6>
        </div>
        {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='cursor-pointer' /> : ""}
      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <AirplaneTicketIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Routes</h6>
        </div>
        {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='cursor-pointer' /> : ""}
      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
        <EmailIcon style={{ fontSize: '20px' }} />
        <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Send Sms & Email</h6>

      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'} border-b  solid border-teal-200`} >
        <div className={` ${Menu ? 'flex w-[350px] ' : 'block'}`}>
          <FileDownloadSharpIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>DownLoad Excel</h6>
        </div>
        {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='cursor-pointer' /> : ""}
      </div>
      <div className='p-1 text-center mt-2   text-gray-300 bg-[#e9efef4a] w-[35px] rounded-[50%] cursor-pointer' onClick={() => dispatch({ type: 'MENU', payload: !Menu })}>
        {Menu ? <ArrowRightIcon style={{ fontSize: '25px' }} /> : <ArrowLeftIcon style={{ fontSize: '25px' }} />
        }

      </div>
    </div>
  )
}
