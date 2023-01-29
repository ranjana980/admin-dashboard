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
import { useNavigate } from 'react-router-dom'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

export default function SideNavbar() {
  // const [Menu,setMenu]=useState(false)
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const FormData = useSelector((state) => state.FormDataReducer);
  const { Menu, isMobile } = FormData
  const dispatch = useDispatch()
  return (
    <div className={`text-white  ${Menu ? 'w-[240px]' : 'w-[90px]'}`}>
      <div className={` cursor-pointer text-center border-b  solid border-teal-200 ${Menu ? 'flex p-3' : 'block'}`} onClick={() => navigate('/DefaultLayout')}>
        <i className="fa fa-tachometer text-sm text-white" style={{ fontSize: '20px' }} aria-hidden="true"></i>
        <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>DashBoard</h6>
      </div>
      {/* <div className={`${Menu?'block':'flex'} `}> */}
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`} onClick={() => {
        if (id != 'member') {
          setId('member')
        }
        else {
          setId('')
        }
      }}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <GroupsIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Members</h6>
        </div>
        {Menu ? id == 'member' ? <KeyboardArrowDown style={{ fontSize: '20px' }} /> :
          <ArrowLeftIcon style={{ fontSize: '20px' }} className='' /> : ""}
      </div>
      {id == 'member' ? <div className='bg-white   ml-3 p-2 rounded-[5px]'>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/MemberList')}>
          <p className='p-[4px] text-black leading-[0px] text-sm'>Member List</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Add Member</p>
        </div>
      </div> : ""}
      {/* </div> */}
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`} onClick={() => {
        if (id != 'Request') {
          setId('Request')
        }
        else {
          setId('')
        }
      }}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <AddShoppingCart style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Request</h6>
        </div>
        {Menu ? <ArrowLeftIcon style={{ fontSize: '20px' }} className='cursor-pointer' /> : ""}
      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`} onClick={() => {
        if (id != 'History') {
          setId('History')
        }
        else {
          setId('')
        }
      }}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <ListIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>History</h6>
        </div>
        {Menu ? id == 'History' ? <KeyboardArrowDown style={{ fontSize: '20px' }} /> :
          <ArrowLeftIcon style={{ fontSize: '20px' }} className='' /> : ""}
      </div>
      {id == 'History' ? <div className='bg-white  ml-3 p-2 rounded-[5px]'>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AllHistory')}>
          <p className='p-[4px] text-black leading-[0px] text-sm'>All History</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/ApiHistory')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Api History</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AdminDayBook')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Admin DayBook</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Api DayBook</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Operator History</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >DMR History</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black text-sm leading-[0px] ' >Api Balance Management</p>
        </div>
      </div> : ""}
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}
        onClick={() => {
          if (id != 'Report') {
            setId('Report')
          }
          else {
            setId('')
          }
        }}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <SummarizeIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Report</h6>
        </div>
        {Menu ? id == 'Report' ? <KeyboardArrowDown style={{ fontSize: '20px' }} /> :
          <ArrowLeftIcon style={{ fontSize: '20px' }} className='' /> : ""}
      </div>
      {id == 'Report' ? <div className='bg-white  ml-3 p-2 rounded-[5px]'>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/MemberList')}>
          <p className='p-[4px] text-black leading-[0px] text-sm'>Txn Wise</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Topup Wise</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Operator Wise</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Turnover Wise</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Commission Wise</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Api Wise</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black text-sm leading-[0px] ' >Account ledger</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Payment gateway</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Complain history</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >New user</p>
        </div>
      </div> : ""}
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`} onClick={() => {
        if (id != 'Settings') {
          setId('Settings')
        }
        else {
          setId('')
        }
      }}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <SettingsIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Settings</h6>
        </div>
        {Menu ? id == 'Settings' ? <KeyboardArrowDown style={{ fontSize: '20px' }} /> :
          <ArrowLeftIcon style={{ fontSize: '20px' }} className='' /> : ""}
      </div>
      {id == 'Settings' ? <div className='bg-white  ml-3 p-2 rounded-[5px]'>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/MemberList')}>
          <p className='p-[4px] text-black leading-[0px] text-sm'>Services</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Providers</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >API(s)</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >User Plans</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Dmr Slab</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Payment Options</p>
        </div>

      </div> : ""}
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}
        onClick={() => {
          if (id != 'Notice') {
            setId('Notice')
          }
          else {
            setId('')
          }
        }}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <AlertIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Notice Board</h6>
        </div>
        {Menu ? id == 'Notice' ? <KeyboardArrowDown style={{ fontSize: '20px' }} /> :
          <ArrowLeftIcon style={{ fontSize: '20px' }} className='' /> : ""}
      </div>
      {id == 'Notice' ? <div className='bg-white   ml-3 p-2 rounded-[5px]'>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/MemberList')}>
          <p className='p-[4px] text-black leading-[0px] text-sm'>Notice Board</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Notifications</p>
        </div>
      </div> : ""}
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`} 
      onClick={() => {
        if (id != 'Routes') {
          setId('Routes')
        }
        else {
          setId('')
        }
      }}>
        <div className={` ${Menu ? 'flex w-[300px] ' : 'block'}`}>
          <AirplaneTicketIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Routes</h6>
        </div>
        {Menu ? id == 'Routes' ? <KeyboardArrowDown style={{ fontSize: '20px' }} /> :
          <ArrowLeftIcon style={{ fontSize: '20px' }} className='' /> : ""}
      </div>
      {id == 'Routes' ? <div className='bg-white   ml-3 p-2 rounded-[5px]'>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/MemberList')}>
          <p className='p-[4px] text-black leading-[0px] text-sm'>Priority</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Members</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Service</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Operators</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Amount</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Plans</p>
        </div>
      </div> : ""}
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'}`}>
        <EmailIcon style={{ fontSize: '20px' }} />
        <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>Send Sms & Email</h6>
      </div>
      <div className={`p-1 cursor-pointer text-center ${Menu ? 'flex p-3' : 'block'} border-b  solid border-teal-200`}  onClick={() => {
        if (id != 'excel') {
          setId('excel')
        }
        else {
          setId('')
        }
      }}>
        <div className={` ${Menu ? 'flex w-[350px] ' : 'block'}`}>
          <FileDownloadSharpIcon style={{ fontSize: '20px' }} />
          <h6 className={`${Menu ? 'ml-3 text-sm' : 'pl-0 text-xs'}  `}>DownLoad Excel</h6>
        </div>
        {Menu ? id == 'excel' ? <KeyboardArrowDown style={{ fontSize: '20px' }} /> :
          <ArrowLeftIcon style={{ fontSize: '20px' }} className='' /> : ""}
      </div>
      {id == 'excel' ? <div className='bg-white   ml-3 p-2 rounded-[5px]'>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/MemberList')}>
          <p className='p-[4px] text-black leading-[0px] text-sm'>DownLoad Report</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Re-Con</p>
        </div>
        <div className='p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/AddMember')}>
          <p className='p-[4px] text-black leading-[0px] text-sm' >Live Report</p>
        </div>

      </div> : ""}
      {!isMobile ? <div className='p-1 text-center mt-2   text-gray-300 bg-[#e9efef4a] w-[35px] rounded-[50%] cursor-pointer' onClick={() => dispatch({ type: 'MENU', payload: !Menu })}>
        {Menu ? <ArrowRightIcon style={{ fontSize: '25px' }} /> : <ArrowLeftIcon style={{ fontSize: '25px' }} />
        }
      </div> : ""}
    </div>
  )
}
