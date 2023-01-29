import React from 'react'
import Navbar from '../NavBar/Navbar'
import SideNavbar from '../NavBar/SideNavbar'
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'reactstrap'
export default function AddMember() {
  const FormData = useSelector((state) => state.FormDataReducer);
  const { Menu,isMobile } = FormData
  return (
    <div>
      <div>
        <div className='grid grid-cols-12'>
          <div className={`${Menu ? 'lg:col-span-2' : 'lg:col-span-1'} ${Menu ? 'md:col-span-2' : 'md:col-span-1'} ${Menu ? 'xl:col-span-2' : 'xl:col-span-1'}  ${isMobile ? 'sm:block sm:col-span-2' : 'sm:hidden sm:col-span-0'} ${isMobile ? 'xs:block xs:col-span-2' : 'xs:hidden xs:col-span-0'} md:block lg:block xl:block`}>
            <SideNavbar />
          </div>
          <div className={`lg:${Menu ? 'col-span-10' : 'col-span-11'} md:${Menu ? 'col-span-10' : 'col-span-11'} ${isMobile ? ' sm:col-span-10' : ' sm:col-span-12'} ${isMobile ? ' xs:col-span-10' : ' xs:col-span-12'}  bg-gray-100`}>
            <Navbar />
            <div className=' p-3 m-2 text-gray-600'>
              <h4>Team Details</h4>
              <div className='bg-white box-shadow-lg rounded-[5px]  '>
                <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                  <h6 className='font-bold text-teal-500 '>Add Team Details</h6>
                </div>
                <div className='p-4'>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Name of Client</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Name</label>
                      <div><input type='text' placeholder='User Name' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Plan</label>
                      <div>
                        <select type='text' placeholder='User Plan' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                          <option>Select Plan</option>
                          <option>Basic Plan</option>
                          <option>Daimond</option>
                          <option>Dikshu India Plan</option>
                          <option>Platinaum</option>
                          <option>Gold</option>
                          <option>Silver</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>User Type</label>
                      <div>
                        <select type='text' placeholder='User Type' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                          <option>Select User Type</option>
                          <option>Basic Plan</option>
                          <option>Daimond</option>
                          <option>Dikshu India Plan</option>
                          <option>Platinaum</option>
                          <option>Gold</option>
                          <option>Silver</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Team Member</label>
                      <div>
                        <select type='text' placeholder='Team Member' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                          <option>Select Team Member</option>
                          <option>Basic Plan</option>
                          <option>Daimond</option>
                          <option>Dikshu India Plan</option>
                          <option>Platinaum</option>
                          <option>Gold</option>
                          <option>Silver</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Email</label>
                      <div><input type='text' placeholder='Enter Email' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Mobile Number</label>
                      <div><input type='text' placeholder='Enter Mobile No' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Alternative Number</label>
                      <div><input type='text' placeholder='Alternative Mobile No' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Password</label>
                      <div><input type='password' placeholder='Password' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Address</label>
                      <div><input type='text' placeholder='User Address' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>District</label>
                      <div><input type='text' placeholder='District' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>State</label>
                      <div><input type='text' placeholder='State' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Amount Balance</label>
                      <div><input type='text' disabled={true} placeholder='Amount Balance' className='border-gray-700 w-[90%] border rounded-[5px] p-2 bg-gray-200' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>wallet Limit (Hold Money)</label>
                      <div><input type='text' placeholder='Amount Balance' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Credit Amount</label>
                      <div><input type='text' placeholder='Credit Amount' className='border-gray-700  w-[90%] border rounded-[5px] p-2 bg-gray-200' />
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Credit Limit</label>
                      <div><input type='text' placeholder='Credit Limit' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>DOB</label>
                      <div><input type='date' placeholder='DOB' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Company Name</label>
                      <div><input type='text' placeholder='Company Name' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Company Type</label>
                      <div><input type='text' placeholder='Company Type' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Kyc Verified</label>
                      <div><input type='text' placeholder='Not Verified' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>GST</label>
                      <div><input type='Text' placeholder='GST Number' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Pancard</label>
                      <div><input type='text' placeholder='Pancard' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Aadhar Card</label>
                      <div><input type='text' placeholder='Aadhar Card' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Mobile Verified</label>
                      <div>
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                          <option>Select </option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Email Verified</label>
                      <div>
                        <select type='text' placeholder='Email Verified' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                          <option>Select </option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Approved By</label>
                      <div>
                        <select type='text' placeholder='Approved By' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                          <option>Select </option>
                          <option>Approve Now</option>
                          <option>Not yet</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Route</label>
                      <div>
                        <select type='text' placeholder='Route' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                          <option>Select </option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Force Logout</label>
                      <div><input type='text' placeholder='Force Logout From All Devices' className='border-gray-700 w-[90%] bg-teal-400 border rounded-[5px] p-2 placeholder:text-center placeholder:text-white' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Status</label>
                      <div>
                        <select type='text' placeholder='Status' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
                          <option>Select </option>
                          <option>Active</option>
                          <option>Blocked</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-span-4'>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                    </div>
                    <div className='col-span-4'>
                      <label>UUID</label>
                      <div><input type='text' placeholder='UUID of Device' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Prpfile Pic</label>
                      <div><input type='file' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4 flex gap-[5px]'>
                      <button className='text-white p-2 bg-teal-400 rounded-[5px]'>Save</button>
                      <button className='text-white p-2 bg-gray-400 rounded-[5px]'>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
