import React from 'react'
import WorkIcon from '@material-ui/icons/Work'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PowerIcon from '@material-ui/icons/Power';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassTopIcon from '@material-ui/icons/HourglassEmpty';
import DisabledByDefaultIcon from '@material-ui/icons/CancelPresentation';
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import HelpIcon from '@material-ui/icons/Help';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CloudIcon from '@material-ui/icons/Cloud';
import WidgetsIcon from '@material-ui/icons/Widgets';
import { Table } from 'reactstrap'
export default function DashBoard() {
  return (
    <div className='bg-gray-100 p-3'>
      <div>
        <div className='grid grid-cols-12 '>
          <div className='xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 xs:col-span-12'>
            <h1 className='text-xl'>Reports (Today i.e. 2023-01-23)</h1>
            <div className='xl:flex md:block sm:flex lg:block xl:mr-0 lg:mr-24 md:mr-24'>
              <div className='bg-green-400 text-white rounded-[5px]'><p className='p-2'>API Balance:Rs 5990</p></div>
              <div className='bg-yellow-400 text-white rounded-[5px] xl:ml-5 md:ml-0 sm:ml-5'><p className='p-2'>User Balance:Rs 599087.5</p></div>
            </div>
          </div>
          <div className='xl:col-span-6 lg:col-span-6 md:col-span-6 mt-3 sm:col-span-12 xs:col-span-12'>
            <div className='grid grid-cols-12 '>
              <div className='sm:ml-0  xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12'>
                <p className='leading-[12px]'>From Date</p>
                <input type='date' className='border-gray-700 border rounded-[5px] p-2 xl:min-w-[210px] md:min-w-[50px] md:max-w-[120px] sm:min-w-[600px]  xs:min-w-[250px]'  />
              </div>
              <div className='lg:ml-5  md:ml-5 sm:ml-0  xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12 sm:mt-2 xs:mt-2 xl:mt-0 md:mt-0'>
                <p className='leading-[12px]'>To Date</p>
                <input type='date' className='border-gray-700 border rounded-[5px] p-2 xl:min-w-[210px] md:min-w-[50px] md:max-w-[120px] xs:min-w-[250px] sm:min-w-[600px]' />
              </div>
              <div className='xl:ml-5 lg:ml-8  md:ml-10 sm:ml-0 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12'>
                <button className='bg-teal-500  lg:min-w-[130px] md:min-w-[70px] p-2 text-white rounded-[5px] mt-6 xl:min-w-[210px] sm:min-w-[600px]  xs:min-w-[250px]'>Seacrh</button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3'>
          <div className='xl:lg:col-span-3 md:col-span-6 md:col-span-6 xl:mt-0 lg:mt-0 sm:col-span-12 md:mt-0 xs:mt-5 xs:col-span-12 bg-cyan-400 box-shadow-lg h-[100px] rounded-[5px] '>
            <div className='p-3  flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>TURNOVER</p>
                <p>Rs 0</p>
              </div>
              <WorkIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 box-shadow-lg bg-green-400 sm:col-span-12 xs:mt-5 xs:col-span-12 lg:ml-5 md:ml-5 md:mt-0 lg:mt-0 sm:mt-5  h-[100px] rounded-[5px] '>
            <div className='p-3 flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>COMMISSION</p>
                <p>Rs 0</p>
              </div>
              <AccountBalanceIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 xl:ml-5 md:mt-5 xl:mt-0 sm:mt-5 lg:mt-5 xs:mt-5 xs:col-span-12 box-shadow-lg bg-teal-500 h-[100px] rounded-[5px] sm:col-span-12 '>
            <div className='p-3 flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>API COMMISSION</p>
                <p>Rs 0</p>
              </div>
              <PowerIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 xl:ml-5 md:ml-5  xl:mt-0 sm:ml-0 xs:col-span-12 xs:mt-5 md:mt-5 sm:mt-5 lg:mt-5 md box-shadow-lg bg-yellow-500  h-[100px] rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>PROFIT/LOSS</p>
                <p>Rs 0</p>
              </div>
              <LocalAtmIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3'>
          <div className='xl:col-span-3 md:col-span-6 bg-green-400 box-shadow-lg h-[125px] xs:col-span-12 xs:mt-0 md:mt-0 lg:mt-0 md:ml-0 sm:mt-0 rounded-[5px] sm:col-span-12'>
            <div className='p-3  flex  text-green-400 bg-white justify-between ml-1 '>
              <div className='leading-[5px] p-3'>
                <p>SUCCESS</p>
                <p>Rs 0</p>
                <p>Total Recharge:0</p>
              </div>
              <CheckCircleIcon className='text-green-400 ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 bg-yellow-400 box-shadow-lg h-[125px] xs:col-span-12 xs:mt-5 lg:ml-5 md:ml-5 sm:ml-0 md:mt-0 lg:mt-0 sm:mt-5  rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex  text-yellow-400 justify-between bg-white ml-1 '>
              <div className='leading-[5px] p-3'>
                <p>PENDING</p>
                <p>Rs 0</p>
                <p>Total Recharge:0</p>
              </div>
              <HourglassTopIcon className='text-yellow-400 ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6  box-shadow-lg bg-red-500 xl:ml-5 xs:col-span-12 xs:mt-5 xl:mt-0 lg:ml-0 sm:mt-5 md:mt-5 lg:mt-5 h-[125px] rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex text-red-400 bg-white ml-1 justify-between '>
              <div className='leading-[5px] p-3'>
                <p>Failed</p>
                <p>Rs 0</p>
                <p>Total Failed:0</p>
              </div>
              <DisabledByDefaultIcon className='text-red-400 ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 xl:ml-5 md:ml-5 sm:ml-0 box-shadow-lg xs:col-span-12 xs:mt-5 md:mt-5 xl:mt-0  sm:mt-5 lg:mt-5 bg-teal-400 h-[125px] rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex text-teal-400 justify-between bg-white ml-1'>
              <div className='leading-[5px] p-3'>
                <p>PROFIT/LOSS</p>
                <p>Rs 0</p>
                <p>Total Refunds:0</p>
              </div>
              <AccountBalanceIcon className='text-teal-400 ' style={{ fontSize: '35px' }} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3'>
          <div className='xl:col-span-3 md:col-span-6 bg-cyan-400 sm:mt-0 box-shadow-lg md:mt-0 h-[125px] xs:col-span-12 xl:mt-0 lg:mt-0  xs:mt-0 rounded-[5px] sm:col-span-12'>
            <div className='p-3  flex text-white  justify-between '>
              <div className='leading-[5px] p-3'>
                <p>MONEY REQUESTS</p>
                <p className=''>Rs 8883220</p>
                <p>Total Request: 25</p>
              </div>
              <Email className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 box-shadow-lg bg-teal-600 h-[125px] xs:col-span-12 xs:mt-5 lg:mt-0 md:ml-5 sm:mt-5 md:mt-0 rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex text-white justify-between'>
              <div className='leading-[5px] p-3'>
                <p >USERS</p>
                <p >27</p>
                <p >Total Balance:rs 366362.5</p>
              </div>
              <People className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 box-shadow-lg xl:ml-5 xl:mt-0 h-[125px] xs:col-span-12 xs:mt-5 lg:ml-0 sm:mt-5 md:mt-5 lg:mt-5 bg-yellow-500 rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>CREDIT AMOUNT</p>
                <p>Rs 310902</p>
                <p>Total credit Limit Rs: 87979797</p>
              </div>
              <CreditCardIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 box-shadow-lg xl:mt-0 lg:ml-5 md:ml-5 xs:col-span-12 xs:mt-5 sm:ml-0 sm:mt-5 md:mt-5 lg:mt-5 bg-red-500 h-[125px] rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>DISPUTES</p>
                <p>Rs </p>
                <p>Total Disputes: 0</p>
              </div>
              <HelpIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3'>
          <div className='xl:col-span-3 md:mt-0 sm:mt-0 md:col-span-6 box-shadow-lg xl:mt-0 lg:mt-0 bg-gray-600 h-[100px] xs:col-span-12 xs:mt-0  rounded-[5px] sm:col-span-12'>
            <div className='p-3  flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>TDS</p>
                <p>Rs 0</p>
              </div>
              <WidgetsIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 box-shadow-lg  bg-gray-500 h-[100px] xs:col-span-12 xs:mt-5 lg:ml-5 md:ml-5 sm:ml-0 lg:mt-0 md:mt-0 sm:mt-5 rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>GST</p>
                <p>Rs 0</p>
              </div>
              <WidgetsIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 box-shadow-lg lg:ml-0 xl:mt-0 xl:ml-5 xs:col-span-12 xs:mt-5 sm:mt-5 md:mt-5 lg:mt-5 bg-gray-400 h-[100px]  rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex text-white justify-between '>
              <div className='leading-[5px] p-3'>
                <p>API TOP UP</p>
                <p>Rs 0</p>
              </div>
              <CloudIcon className='text-white ' style={{ fontSize: '35px' }} />
            </div>
          </div>
          <div className='xl:col-span-3 md:col-span-6 box-shadow-lg xl:mt-0 lg:ml-5 md:ml-5 xs:col-span-12 xs:mt-5 sm:ml-0 sm:mt-5 md:mt-5 lg:mt-5 bg-gray-300 h-[100px] rounded-[5px] sm:col-span-12'>
            <div className='p-3 flex  justify-between '>
              <div className='leading-[5px] p-3'>
                <p>USER TOP UP</p>
                <p>Rs 0</p>
              </div>
              <People className=' ' style={{ fontSize: '35px' }} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3 '>
          <div className='xl:col-span-6 md:col-span-12  lg:col-span-6 sm:col-span-12 xs:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>
                <Table responsive >
                  <thead className='bg-gray-100'>
                    <tr className=''>
                      <th className='border-2 border-gray-200 bg-gray-100'>Service</th>
                      <th className='border-2 border-gray-200 bg-gray-100'>Transaction</th>
                      <th className='border-2 border-gray-200 bg-gray-100'>Amount</th>
                      <th className='border-2 border-gray-200 bg-gray-100'>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border-2 border-gray-200'>Total</td>
                      <td className='border-2 border-gray-200'>0</td>
                      <td className='border-2 border-gray-200'>Rs.0</td>
                      <td className='border-2 border-gray-200'>100%</td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 md:mt-5 lg:mt-0 xs:col-span-12 xs:mt-5 sm:mt-5 sm:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] '>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>
                <Table responsive >
                  <thead className='bg-gray-100'>
                    <tr>
                      <th className='border-2 border-gray-200 bg-gray-100'>Service</th>
                      <th className='border-2 border-gray-200 bg-gray-100'>Transaction</th>
                      <th className='border-2 border-gray-200 bg-gray-100'>Amount</th>
                      <th className='border-2 border-gray-200 bg-gray-100'>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border-2 border-gray-200'>Total</td>
                      <td className='border-2 border-gray-200'>0</td>
                      <td className='border-2 border-gray-200'>Rs.0</td>
                      <td className='border-2 border-gray-200'>100%</td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3 '>
          <div className='lg:col-span-6 md:col-span-12  sm:col-span-12 xs:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
          <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 md:mt-5 lg:mt-0 xs:col-span-12 xs:mt-5 sm:mt-5 sm:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3 '>
          <div className='lg:col-span-6 md:col-span-12  sm:col-span-12 xs:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
          <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 sm:mt-5 md:mt-5 xs:col-span-12 xs:mt-5 lg:mt-0 sm:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px] '>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3 '>
          <div className='lg:col-span-6 md:col-span-12  sm:col-span-12 xs:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
          <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 md:mt-5 xs:col-span-12 xs:mt-5 sm:mt-5 lg:mt-0 sm:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px] '>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3 '>
          <div className='lg:col-span-6 md:col-span-12  sm:col-span-12 xs:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
          <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 md:mt-5 xs:col-span-12 xs:mt-5 sm:mt-5 lg:mt-0 sm:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-3 '>
          <div className='lg:col-span-6 md:col-span-12  sm:col-span-12 xs:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
          <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 xs:col-span-12 md:mt-5 xs:mt-5 sm:mt-5 lg:mt-0 sm:col-span-12'>
            <div className='bg-white box-shadow-lg rounded-[5px] h-[350px]'>
              <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
              </div>
              <div className='p-4'>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
