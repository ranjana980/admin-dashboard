import React from 'react'
import Navbar from '../NavBar/Navbar'
import SideNavbar from '../NavBar/SideNavbar'
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'reactstrap'
import { Drawer } from '@material-ui/core';

export default function AdminDayBook() {
  const FormData = useSelector((state) => state.FormDataReducer);
  const { Menu, isMobile } = FormData
  const dispatch = useDispatch()
  return (
    <div className='grid grid-cols-12'>
      <div className={`${Menu ? 'lg:col-span-2' : 'lg:col-span-1'} ${Menu ? 'md:col-span-2' : 'md:col-span-1'} ${Menu ? 'xl:col-span-2' : 'xl:col-span-1'}  ${isMobile ? 'sm:block sm:col-span-2' : 'sm:hidden sm:col-span-0'} ${isMobile ? 'xs:block xs:col-span-2' : 'xs:hidden xs:col-span-0'} md:block lg:block xl:block`}>
        {isMobile ? <Drawer open={isMobile} anchor='left' onClose={() => { dispatch({ type: 'MOBILE', payload: !isMobile }) }}>
          <SideNavbar />
        </Drawer> : <SideNavbar />}
      </div>
      <div className={`${Menu ? 'lg:col-span-10' : 'lg:col-span-11'} ${Menu ? 'md:col-span-10' : 'md:col-span-11'} ${Menu ? 'xl:col-span-10' : 'xl:col-span-11'} ${isMobile ? ' sm:col-span-10' : ' sm:col-span-12'} ${isMobile ? ' xs:col-span-10' : ' xs:col-span-12'} bg-gray-100`}>
        <Navbar />
        <div className=' p-3 m-2 text-gray-600 '>
          <h4>Admin DayBook</h4>
          <div className='grid grid-cols-12 gap-[20px]'>
            <div className='xl:col-span-2  bg-[#1cc88a] lg:col-span-2 md:col-span-6 sm:col-span-12 xs:col-span-12 box-shadow-lg  rounded-[5px]'>
              <div className='bg-white ml-1  p-[24px]'>
                <h6 className='text-[#1cc88a] text-xs '>TOTAL SUCCESS</h6>
                <div className='flex justify-start'>
                  <i className="fa fa-tachometer text-sm text-[#1cc88a]" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  <h6 className='text-[#1cc88a] font-bold ml-2'>0</h6>
                </div>
              </div>
            </div>
            <div className='xl:col-span-2 bg-[#1cc88a] lg:col-span-2 md:col-span-6 sm:col-span-12 xs:col-span-12 box-shadow-lg  rounded-[5px]'>
              <div className='bg-[#1cc88a] ml-1 p-3'>
                <h6 className='text-[gray]  text-xs'>RECIVED MARGIN</h6>
                <div className='flex justify-start'>
                  <i className="fa fa-tachometer text-sm text-[white]" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  <h6 className='text-[white] font-bold ml-2'>0</h6>
                </div>
              </div>
            </div>
            <div className='xl:col-span-2 bg-red-600 lg:col-span-2 md:col-span-6 sm:col-span-12 xs:col-span-12 box-shadow-lg  rounded-[5px]'>
              <div className='bg-red-600 ml-1 p-3'>
                <h6 className='text-[gray]  text-xs'>MD INCOME</h6>
                <div className='flex justify-start'>
                  <i className="fa fa-tachometer text-sm text-[white]" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  <h6 className='text-[white] font-bold ml-2'>0</h6>
                </div>
              </div>
            </div>
            <div className='xl:col-span-2 bg-blue-400 lg:col-span-2 md:col-span-6 sm:col-span-12 xs:col-span-12 box-shadow-lg  rounded-[5px]'>
              <div className='bg-blue-400 ml-1 p-3'>
                <h6 className='text-[gray]  text-xs'>DT INCOME</h6>
                <div className='flex justify-start'>
                  <i className="fa fa-tachometer text-sm text-[white]" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  <h6 className='text-[white] font-bold ml-2'>0</h6>
                </div>
              </div>
            </div>
            <div className='xl:col-span-2 bg-yellow-500 lg:col-span-2 md:col-span-6 sm:col-span-12 xs:col-span-12 box-shadow-lg  rounded-[5px]'>
              <div className='bg-yellow-500 ml-1 p-3'>
                <h6 className='text-[gray]  text-xs'>RT INCOME</h6>
                <div className='flex justify-start'>
                  <i className="fa fa-tachometer text-sm text-[white]" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  <h6 className='text-[white] font-bold ml-2'>0</h6>
                </div>
              </div>
            </div>
            <div className='xl:col-span-2 bg-teal-600 lg:col-span-2 md:col-span-6 sm:col-span-12 xs:col-span-12 box-shadow-lg  rounded-[5px]'>
              <div className='bg-teal-600 ml-1 p-3'>
                <h6 className='text-[gray]  text-xs'>MD INCOME</h6>
                <div className='flex justify-start'>
                  <i className="fa fa-tachometer text-sm text-[white]" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  <h6 className='text-[white] font-bold ml-2'>0</h6>
                </div>
              </div>
            </div>
            <div className='xl:col-span-2 bg-[#1cc88a] lg:col-span-2 md:col-span-6 sm:col-span-12 xs:col-span-12 box-shadow-lg  rounded-[5px]'>
              <div className='bg-[#1cc88a] ml-1 p-3'>
                <h6 className='text-[gray]  text-xs'>ADMIN INCOME</h6>
                <div className='flex justify-start'>
                  <i className="fa fa-tachometer text-sm text-[white]" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  <h6 className='text-[white] font-bold ml-2'>0</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white box-shadow-lg rounded-[5px] mt-3 '>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='font-bold text-teal-500 '>Search</h6>
            </div>
            <div className='p-4'>
              <div className='grid grid-cols-12 x'>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>Api Name</label>
                  <div>
                    <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                      <option>Select Api</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>Operator</label>
                  <div>
                    <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                      <option>Select Operator</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className='xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-12 xs:col-span-12'>
                  <label>From Date</label>
                  <div>
                    <input type='date' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                  </div>
                </div>
                <div className='xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-12 xs:col-span-12'>
                  <label>To Date</label>
                  <div>
                    <input type='date' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />

                  </div>
                </div>
                <div className='xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-12 xs:col-span-12'>
                  <label></label>
                  <div>
                    <button className='border-gray-700 text-white text-center bg-teal-500 w-[90%] border rounded-[5px] p-2'>Search</button>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className='bg-white box-shadow-lg rounded-[5px] mt-5'>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='ml-2 font-bold text-teal-400 '>List</h6>
            </div>
            <div className='p-4'>
              <div className='flex gap-[5px] mb-2'>
                <button className='text-white p-2 bg-teal-500 rounded-[5px]'>Copy</button>
                <button className='text-white p-2 bg-teal-500 rounded-[5px]'>CSV</button>
                <button className='text-white p-2 bg-teal-500 rounded-[5px]'>Excel</button>
                <button className='text-white p-2 bg-teal-500 rounded-[5px]'>PDF</button>
                <button className='text-white p-2 bg-teal-500 rounded-[5px]'>Print</button>
              </div>
              <Table responsive >
                <thead >
                  <tr className='text-gray-400'>
                    <th className='border-2 border-gray-200 bg-gray-100'>S .No</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Name</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Start Amount</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Top Up</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Transaction(Success/Failed)</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>End Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-gray-400 bg-gray-100'>
                    <td className='border-2 border-gray-200'>1</td>
                    <td className='border-2 border-gray-200'>
                      Plan Api
                    </td>
                    <td className='border-2 border-gray-200'>500</td>
                    <td className='border-2 border-gray-200'>500</td>
                    <td className='border-2 border-gray-200 '>400 Success</td>
                    <td className='border-2 border-gray-200'>600</td>
                  </tr>
                  <tr className='text-gray-400'>
                    <td className='border-2 border-gray-200'>2</td>
                    <td className='border-2 border-gray-200'>
                      Plan Api
                    </td>
                    <td className='border-2 border-gray-200'>500</td>
                    <td className='border-2 border-gray-200'>500</td>
                    <td className='border-2 border-gray-200 '>400 Success</td>
                    <td className='border-2 border-gray-200'>600</td>
                  </tr>
                  <tr className='text-gray-400'>
                    <td className='border-2 border-gray-200'>3</td>

                    <td className='border-2 border-gray-200'>
                      Plan Api
                    </td>
                    <td className='border-2 border-gray-200'>500</td>
                    <td className='border-2 border-gray-200'>500</td>
                    <td className='border-2 border-gray-200 '>400 Success</td>
                    <td className='border-2 border-gray-200'>600</td>

                  </tr>
                  <tr className='text-gray-400'>
                    <td className='border-2 border-gray-200'>4</td>

                    <td className='border-2 border-gray-200'>
                      Plan Api
                    </td>
                    <td className='border-2 border-gray-200'>500</td>
                    <td className='border-2 border-gray-200'>500</td>
                    <td className='border-2 border-gray-200 '>400 Success</td>
                    <td className='border-2 border-gray-200'>600</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
