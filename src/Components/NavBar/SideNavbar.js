import React from 'react'
import GroupsIcon from '@material-ui/icons/Group';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import ListIcon from '@material-ui/icons/ListAlt';
import SummarizeIcon from '@material-ui/icons/InsertDriveFile';
import SettingsIcon from '@material-ui/icons/Settings';
import AlertIcon from '@material-ui/icons/Notifications';
import AirplaneTicketIcon from '@material-ui/icons/AirplanemodeActiveRounded';
import EmailIcon from '@material-ui/icons/Email'
import FileDownloadSharpIcon from '@material-ui/icons/GetAppSharp';
export default function SideNavbar() {
  return (
    <div className='text-white'>
      {/* <h1>Side Navigation</h1> */}
      <div className='  p-2 text-center '>
        <i className="fa fa-tachometer text-sm text-white" style={{ fontSize: '30px' }} aria-hidden="true"></i>
        <h6 className='text-sm '>DashBoard</h6>
      </div>
      <div className=' p-2 text-center'>
        <GroupsIcon style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>Members</h6>
      </div>
      <div className='p-2 text-center'>
        <AddShoppingCart style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>Request</h6>
      </div>
      <div className='p-2 text-center'>
        <ListIcon style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>History</h6>
      </div>
      <div className='p-2 text-center'>
        <SummarizeIcon style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>Report</h6>
      </div>
      <div className='p-2 text-center'>
        <SettingsIcon style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>Settings</h6>
      </div>
      <div className='p-2 text-center'>
        <AlertIcon style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>Notice Board</h6>
      </div>
      <div className='p-2 text-center'>
        <AirplaneTicketIcon style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>Routes</h6>
      </div>
      <div className='p-2 text-center'>
        <EmailIcon style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>Send Sms & Email</h6>
      </div>
      <div className='p-2 text-center'>
        <FileDownloadSharpIcon style={{ fontSize: '30px' }} />
        <h6 className='text-sm '>DownLoad Excel</h6>
      </div>
    </div>
  )
}
