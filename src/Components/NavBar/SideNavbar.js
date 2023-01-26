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
    <div className='text-white ml-2 w-[90px]'>
      <div className='p-1 text-center border-b  solid border-teal-200'>
        <i className="fa fa-tachometer text-sm text-white" style={{ fontSize: '20px' }} aria-hidden="true"></i>
        <h6 className='text-xs '>DashBoard</h6>
      </div>
      <div className=' p-1 text-center'>
        <GroupsIcon style={{ fontSize: '20px' }} />
        <h6 className='text-xs '>Members</h6>
      </div>
      <div className='p-1 text-center'>
        <AddShoppingCart style={{ fontSize: '20px' }} />
        <h6 className='text-xs '>Request</h6>
      </div>
      <div className='p-1 text-center'>
        <ListIcon style={{ fontSize: '20px' }} />
        <h6 className='text-xs '>History</h6>
      </div>
      <div className='p-1 text-center'>
        <SummarizeIcon style={{ fontSize: '20px' }} />
        <h6 className='text-xs '>Report</h6>
      </div>
      <div className='p-1 text-center'>
        <SettingsIcon style={{ fontSize: '20px' }} />
        <h6 className='text-xs'>Settings</h6>
      </div>
      <div className='p-1 text-center'>
        <AlertIcon style={{ fontSize: '20px' }} />
        <h6 className='text-xs'>Notice Board</h6>
      </div>
      <div className='p-1 text-center'>
        <AirplaneTicketIcon style={{ fontSize: '20px' }} />
        <h6 className='text-xs '>Routes</h6>
      </div>
      <div className='p-1 text-center'>
        <EmailIcon style={{ fontSize: '20px' }} />
        <h6 className='text-xs '>Send Sms & Email</h6>
      </div>
      <div className='p-1 text-center'>
        <FileDownloadSharpIcon style={{ fontSize: '20px' }} />
        <h6 className='text-xs'>DownLoad Excel</h6>
      </div>
    </div>
  )
}
