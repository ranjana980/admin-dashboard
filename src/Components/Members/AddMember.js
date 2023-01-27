import React from 'react'
import Navbar from '../NavBar/Navbar'
import SideNavbar from '../NavBar/SideNavbar'
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'reactstrap'
export default function AddMember() {
  const FormData = useSelector((state) => state.FormDataReducer);
  const { Menu } = FormData
  return (
    <div>
      <div>
        <div className='grid grid-cols-12'>
          <div className={`lg:${Menu ? 'col-start-1 col-span-2' : 'col-span-1'} md:${Menu ? 'col-start-1 col-span-2' : 'col-span-1'} sm:col-span-0 xs:col-span-0 sm:hidden xs:hidden md:block lg:block`}>
            <SideNavbar />
          </div>
          <div className={`lg:${Menu ? 'col-span-10' : 'col-span-11'} md:${Menu ? 'col-span-10' : 'col-span-11'} sm:col-span-12 xs:col-span-12 bg-gray-100`}>
            <Navbar />
            <div className=' p-3 m-2 text-gray-400'>
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
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Plan</label>
                      <div>
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
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
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
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
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
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
                      <div><input type='text'  disabled={true} placeholder='Amount Balance' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>wallet Limit (Hold Money)</label>
                      <div><input type='text' placeholder='Amount Balance' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>Credit Amount</label>
                      <div><input type='text' placeholder='Credit Amount' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    
                  </div>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-4'>
                      <label>Name of Client</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Name</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Plan</label>
                      <div>
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
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
                      <label>Name of Client</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Name</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Plan</label>
                      <div>
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
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
                      <label>Name of Client</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Name</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Plan</label>
                      <div>
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
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
                      <label>Name of Client</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Name</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Plan</label>
                      <div>
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
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
                      <label>Name of Client</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700 w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Name</label>
                      <div><input type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' />
                      </div>
                    </div>
                    <div className='col-span-4'>
                      <label>User Plan</label>
                      <div>
                        <select type='text' placeholder='Name of Client' className='border-gray-700  w-[90%] border rounded-[5px] p-2' >
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
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
