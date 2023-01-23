import React from 'react'
import WorkIcon from '@material-ui/icons/Work'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PowerIcon from '@material-ui/icons/Power';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassTopIcon from '@material-ui/icons/HourglassEmpty';
import DisabledByDefaultIcon from '@material-ui/icons/CancelPresentation';
import  Email  from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import HelpIcon from '@material-ui/icons/Help';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CloudIcon from '@material-ui/icons/Cloud';
import WidgetsIcon from '@material-ui/icons/Widgets';
export default function DashBoard() {
  return (
    <div className='bg-gray-100 p-5'>
      <div>
        <div className='flex justify-between '>
          <div>
            <h1 className='text-xl'>Reports (Today i.e. 2023-01-23)</h1>
            <div className='flex'>
              <div className='bg-green-400 text-white rounded-[5px]'><p className='p-2'>API Balance:Rs 5990</p></div>
              <div className='bg-yellow-400 text-white rounded-[5px] ml-5'><p className='p-2'>User Balance:Rs 599087.5</p></div>
            </div>
          </div>
          <div className='flex '>
            <div className='ml-5'>
              <p>From Date</p>
              <input type='date' className='border-gray-300 p-2' />
            </div>
            <div className='ml-5'>
              <p>To Date</p>
              <input type='date' className='border-gray-300 p-2' />
            </div>
            <div className='ml-5'>
              {/* <p></p> */}
              <button className='bg-teal-500 min-w-[170px] p-2 text-white rounded-[5px] mt-6'>Seacrh</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-5'>
          <div className='col-span-3 bg-cyan-400 box-shadow-lg  rounded-[5px] '>
            <div className='p-5  flex text-white justify-between '>
              <div>
                <p>TURNOVER</p>
                <p>Rs 0</p>
              </div>
              <WorkIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 box-shadow-lg bg-green-400 ml-5 rounded-[5px] '>
            <div className='p-5 flex text-white justify-between '>
              <div>
                <p>COMMISSION</p>
                <p>Rs 0</p>
              </div>
              <AccountBalanceIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 ml-5 box-shadow-lg bg-teal-500 rounded-[5px] '>
            <div className='p-5 flex text-white justify-between '>
              <div>
                <p>API COMMISSION</p>
                <p>Rs 0</p>
              </div>
              <PowerIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 ml-5 box-shadow-lg bg-yellow-500 rounded-[5px] '>
            <div className='p-5 flex text-white justify-between '>
              <div>
                <p>PROFIT/LOSS</p>
                <p>Rs 0</p>
              </div>
              <LocalAtmIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-5'>
          <div className='col-span-3 bg-green-400 box-shadow-lg  rounded-[5px] '>
            <div className='p-5  flex  text-green-400 bg-white justify-between ml-1 '>
              <div>
                <p>SUCCESS</p>
                <p>Rs 0</p>
                <p>Total Recharge:0</p>
              </div>
              <CheckCircleIcon className='text-green-400 ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 bg-yellow-400 box-shadow-lg ml-5 rounded-[5px] '>
            <div className='p-5 flex text-white text-yellow-400 justify-between bg-white ml-1 '>
              <div>
                <p>PENDING</p>
                <p>Rs 0</p>
                <p>Total Recharge:0</p>
              </div>
              <HourglassTopIcon className='text-yellow-400 ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 ml-5 box-shadow-lg bg-red-500 rounded-[5px] '>
            <div className='p-5 flex text-red-400 bg-white ml-1 justify-between '>
              <div>
                <p>Failed</p>
                <p>Rs 0</p>
                <p>Total Failed:0</p>
              </div>
              <DisabledByDefaultIcon className='text-red-400 ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 ml-5 box-shadow-lg bg-teal-400 rounded-[5px] '>
            <div className='p-5 flex text-teal-400 justify-between bg-white ml-1'>
              <div>
                <p>PROFIT/LOSS</p>
                <p>Rs 0</p>
                <p>Total Refunds:0</p>
              </div>
              <AccountBalanceIcon className='text-teal-400 ' style={{ fontSize: '35px' }} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-5'>
          <div className='col-span-3 bg-cyan-400 box-shadow-lg  rounded-[5px] '>
            <div className='p-5  flex text-white  justify-between '>
              <div>
                <p>MONEY REQUESTS</p>
                <p className='text-lg font-bold-[400]'>Rs 8883220</p>
                <p>Total Request: 25</p>
              </div>
              <Email className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 box-shadow-lg bg-teal-600 ml-5 rounded-[5px] '>
            <div className='p-5 flex text-white justify-between '>
              <div>
                <p>USERS</p>
                <p>27</p>
                <p>Total Balance:rs 366362.5</p>
              </div>
              <People className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 box-shadow-lg ml-5 bg-yellow-500 rounded-[5px] '>
            <div className='p-5 flex text-white justify-between '>
              <div>
                <p>CREDIT AMOUNT</p>
                <p>Rs 310902</p>
                <p>Total credit Limit Rs:575767</p>
              </div>
              <CreditCardIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 box-shadow-lg ml-5 bg-red-500 rounded-[5px] '>
            <div className='p-5 flex text-white justify-between '>
              <div>
                <p>DISPUTES</p>
                <p>Rs </p>
                <p>Total Disputes: 0</p>
              </div>
              <HelpIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-5'>
          <div className='col-span-3 box-shadow-lg bg-gray-600  rounded-[5px] '>
            <div className='p-5  flex text-white justify-between '>
              <div>
                <p>TDS</p>
                <p>Rs 0</p>
              </div>
              <WidgetsIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 box-shadow-lg bg-gray-500 ml-5 rounded-[5px] '>
            <div className='p-5 flex text-white justify-between '>
              <div>
                <p>GST</p>
                <p>Rs 0</p>
              </div>
              <WidgetsIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 box-shadow-lg ml-5 bg-gray-400 rounded-[5px] '>
            <div className='p-5 flex text-white justify-between '>
              <div>
                <p>API TOP UP</p>
                <p>Rs 0</p>
              </div>
              <CloudIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='col-span-3 box-shadow-lg ml-5 bg-gray-300 rounded-[5px] '>
            <div className='p-5 flex  justify-between '>
              <div>
                <p>USER TOP UP</p>
                <p>Rs 0</p>
              </div>
              <People className=' ' style={{ fontSize: '35px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
