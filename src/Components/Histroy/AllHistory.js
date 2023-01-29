import React from 'react'
import Navbar from '../NavBar/Navbar'
import SideNavbar from '../NavBar/SideNavbar'
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'reactstrap'

export default function AllHistory() {
  const FormData = useSelector((state) => state.FormDataReducer);
  const { Menu, isMobile } = FormData
  return (
    <div className='grid grid-cols-12'>
      <div className={`${Menu ? 'lg:col-span-2' : 'lg:col-span-1'} ${Menu ? 'md:col-span-2' : 'md:col-span-1'} ${Menu ? 'xl:col-span-2' : 'xl:col-span-1'}  ${isMobile ? 'sm:block sm:col-span-2' : 'sm:hidden sm:col-span-0'} ${isMobile ? 'xs:block xs:col-span-2' : 'xs:hidden xs:col-span-0'} md:block lg:block xl:block`}>
        <SideNavbar />
      </div>
      <div className={`${Menu ? 'lg:col-span-10' : 'lg:col-span-11'} ${Menu ? 'md:col-span-10' : 'md:col-span-11'} ${Menu ? 'xl:col-span-10' : 'xl:col-span-11'} ${isMobile ? ' sm:col-span-10' : ' sm:col-span-12'} ${isMobile ? ' xs:col-span-10' : ' xs:col-span-12'} bg-gray-100`}>
        <Navbar />
        <div className=' p-3 m-2 text-gray-600 '>
          <h4>Recharge History</h4>
          <div className='bg-white box-shadow-lg rounded-[5px] '>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='font-bold text-teal-500 '>Filters</h6>
            </div>
            <div className='p-4'>
              <div className='grid grid-cols-12'>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>Service</label>
                  <div>
                    <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                      <option>Select Service</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>Provider</label>
                  <div>
                    <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                      <option>Select Provider</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>Transaction Type</label>
                  <div>
                    <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                      <option>Select Transaction</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>Status</label>
                  <div>
                    <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                      <option>Select Status</option>
                      <option>Active</option>
                      <option>Blocked</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-12'>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>From</label>
                  <div>
                    <input type='date' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                  </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>To</label>
                  <div>
                    <input type='date' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                  </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label>Mobile / DTH / Ref Number</label>
                  <div>
                    <input type='text' placeholder='Mobile / DTH / Ref Number' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                  </div>
                </div>
                <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12'>
                  <label></label>
                  <div>
                    <input type='text' placeholder='Search Records' className='border-gray-700 w-[90%] bg-teal-400 border rounded-[5px] p-2 placeholder:text-center placeholder:text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white box-shadow-lg rounded-[5px] mt-5'>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='ml-2 text-gray-400 '>Transaction History (Only Recharges / Commissions)</h6>
            </div>
            <div className='p-4'>
              <div className='flex gap-[5px] mb-2'>
                <button className='text-white p-2 bg-teal-300 rounded-[5px]'>Excel</button>
                <button className='text-white p-2 bg-teal-400 rounded-[5px]'>PDF</button>
                {/* <button className='text-white p-2 bg-teal-500 rounded-[5px]'>Print</button> */}
              </div>
              <Table responsive >
                <thead >
                  <tr className='text-gray-400'>
                    <th className='border-2 border-gray-200 bg-gray-100'>Date</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>User Details</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Transaction Details</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Api Details</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Old Amount</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Amount</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>New Amount</th>
                    <th className='border-2 border-gray-200 bg-gray-100'>Operator Id</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-gray-400 bg-gray-100'>
                    <td className='border-2 border-gray-200'>06-12-2022 06:31:40</td>
                    <td className='border-2 border-gray-200'>
                      <div>PPA003 </div>
                    </td>
                    <td className='border-2 border-gray-200'>
                      <div>Recharge -8691005477 (Prepaid)</div>
                      <div>Ref. No.: 1088668274 / VI</div>
                      <div>Rs. 155 Recharge For 8691005477 (Vodafone)</div>
                      <div>(Mumbai)</div>
                      <div>Web (47.15.21.42)</div>
                      <div className='flex gap-[5px]'>
                        <button className='text-white p-2 bg-teal-300 rounded-[5px]'>Pending</button>
                        <button className='text-white p-2 bg-teal-400 rounded-[5px]'>Retry</button>
                        <button className='text-white p-2 bg-teal-500 rounded-[5px]'>Print</button>
                      </div>
                    </td>
                    <td className='border-2 border-gray-200'>digitalnetwork</td>
                    <td className='border-2 border-gray-200'>Rs 144360</td>
                    <td className='border-2 border-gray-200 text-red-500'>-Rs 155</td>
                    <td className='border-2 border-gray-200'>Rs 76956</td>
                    <td></td>

                  </tr>
                  <tr className='text-gray-400'>
                    <td className='border-2 border-gray-200'>06-12-2022 06:31:40</td>
                    <td className='border-2 border-gray-200'>
                      <div>PPA003 </div>
                    </td>
                    <td className='border-2 border-gray-200'> <div>Recharge -8691005477 (Prepaid)</div>
                      <div>Ref. No.: 1088668274 / VI</div>
                      <div>Rs. 155 Recharge For 8691005477 (Vodafone)</div>
                      <div>(Mumbai)</div>
                      <div>Web (47.15.21.42)</div>
                      <div className='flex gap-[5px]'>
                        <button className='text-white p-2 bg-teal-300 rounded-[5px]'>Pending</button>
                        <button className='text-white p-2 bg-teal-400 rounded-[5px]'>Retry</button>
                        <button className='text-white p-2 bg-teal-500 rounded-[5px]'>Print</button>
                      </div></td>
                    <td className='border-2 border-gray-200'>digitalnetwork</td>
                    <td className='border-2 border-gray-200'>Rs 100000</td>
                    <td className='border-2 border-gray-200 text-red-500'>-Rs 15435</td>
                    <td className='border-2 border-gray-200'>Rs 6858</td>
                    <td></td>

                  </tr>
                  <tr className='text-gray-400'>
                    <td className='border-2 border-gray-200'>06-12-2022 06:31:40</td>
                    <td className='border-2 border-gray-200'>
                      <div>PPA003 </div>
                    </td>
                    <td className='border-2 border-gray-200'> <div>Recharge -8691005477 (Prepaid)</div>
                      <div>Ref. No.: 1088668274 / VI</div>
                      <div>Rs. 155 Recharge For 8691005477 (Vodafone)</div>
                      <div>(Mumbai)</div>
                      <div>Web (47.15.21.42)</div>
                      <div className='flex gap-[5px]'>
                        <button className='text-white p-2 bg-teal-300 rounded-[5px]'>Pending</button>
                        <button className='text-white p-2 bg-teal-400 rounded-[5px]'>Retry</button>
                        <button className='text-white p-2 bg-teal-500 rounded-[5px]'>Print</button>
                      </div></td>
                    <td className='border-2 border-gray-200'>BBPS</td>
                    <td className='border-2 border-gray-200'>Rs 8765</td>
                    <td className='border-2 border-gray-200 text-red-500'>-Rs 153245</td>
                    <td className='border-2 border-gray-200'>Rs 7579</td>
                    <td></td>

                  </tr>
                  <tr className='text-gray-400'>
                    <td className='border-2 border-gray-200'>06-12-2022 06:31:40</td>
                    <td className='border-2 border-gray-200'>
                      <div>PPA003 </div>
                    </td>
                    <td className='border-2 border-gray-200'> <div>Recharge -8691005477 (Prepaid)</div>
                      <div>Ref. No.: 1088668274 / VI</div>
                      <div>Rs. 155 Recharge For 8691005477 (Vodafone)</div>
                      <div>(Mumbai)</div>
                      <div>Web (47.15.21.42)</div>
                      <div className='flex gap-[5px]'>
                        <button className='text-white p-2 bg-teal-300 rounded-[5px]'>Pending</button>
                        <button className='text-white p-2 bg-teal-400 rounded-[5px]'>Retry</button>
                        <button className='text-white p-2 bg-teal-500 rounded-[5px]'>Print</button>
                      </div></td>
                    <td className='border-2 border-gray-200'>BBPS</td>
                    <td className='border-2 border-gray-200'>Rs 6788</td>
                    <td className='border-2 border-gray-200 text-red-500'>-Rs 335155</td>
                    <td className='border-2 border-gray-200'>Rs 6857</td>
                    <td></td>
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
