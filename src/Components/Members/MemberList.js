import React from 'react'
import Navbar from '../NavBar/Navbar'
import SideNavbar from '../NavBar/SideNavbar'
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'reactstrap'
import GroupsIcon from '@material-ui/icons/Group';
import  BorderColorSharp  from '@material-ui/icons/BorderColorSharp';
import RecentActors  from '@material-ui/icons/RecentActors';
import  ArrowDropDownCircle from '@material-ui/icons/ArrowBackSharp';
import  ArrowForwardSharp  from '@material-ui/icons/ArrowForwardSharp';
import  DeleteSharp  from '@material-ui/icons/DeleteSharp';
import  DataUsage  from '@material-ui/icons/DataUsage';


export default function MemberList() {
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
            <div className=' p-3 m-2 text-gray-600'>
              <h4>Clients</h4>
              <div className='bg-white box-shadow-lg rounded-[5px]  '>
                <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
                  <h6 className='font-bold text-teal-500 '>List of Members</h6>
                </div>
                <div className='p-4'>
                  <Table responsive >
                    <thead >
                      <tr className='text-gray-400'>
                        <th className='border-2 border-gray-200 bg-gray-100'>S No.</th>
                        <th className='border-2 border-gray-200 bg-gray-100'>Username</th>
                        <th className='border-2 border-gray-200 bg-gray-100'>Balance</th>
                        <th className='border-2 border-gray-200 bg-gray-100'>Credit</th>
                        <th className='border-2 border-gray-200 bg-gray-100'>Limit</th>
                        <th className='border-2 border-gray-200 bg-gray-100'>Location</th>
                        <th className='border-2 border-gray-200 bg-gray-100'>Status</th>
                        <th className='border-2 border-gray-200 bg-gray-100'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='text-gray-400'>
                        <td className='border-2 border-gray-200'>1</td>
                        <td className='border-2 border-gray-200'>
                          <div>PPA003 </div>
                          <div>8700254114</div>
                          <div>vpmapay@gmail.com</div> (API Parter)</td>
                        <td className='border-2 border-gray-200'>Rs 690</td>
                        <td className='border-2 border-gray-200'>Rs 0</td>
                        <td className='border-2 border-gray-200'>Rs 0</td>
                        <td className='border-2 border-gray-200'><div>Gautam Budha Nagar</div>Uttar Pradesh</td>
                        <td className='border-2 border-gray-200'>Active</td>
                        <td className='border-2 border-gray-200'>
                          <div className='flex'><BorderColorSharp style={{fontSize:'20px'}} className='m-1'/><GroupsIcon style={{fontSize:'20px'}} className='m-1' /><RecentActors style={{fontSize:'20px'}} className='m-1' /></div>
                          <div className='flex'><ArrowDropDownCircle style={{fontSize:'20px'}} className='m-1' /><ArrowForwardSharp style={{fontSize:'20px'}} className='m-1' />
                          <DataUsage style={{fontSize:'20px'}} className='m-1'/>
                          <DeleteSharp style={{fontSize:'20px'}} className='m-1'/></div>
                        </td>
                      </tr>
                      <tr className='text-gray-400'>
                        <td className='border-2 border-gray-200'>2</td>
                        <td className='border-2 border-gray-200'>
                          <div>PPA003 </div>
                          <div>8700254114</div>
                          <div>vpmapay@gmail.com</div> (API Parter)</td>
                        <td className='border-2 border-gray-200'>Rs 690</td>
                        <td className='border-2 border-gray-200'>Rs 0</td>
                        <td className='border-2 border-gray-200'>Rs 0</td>
                        <td className='border-2 border-gray-200'><div>Gautam Budha Nagar</div>Uttar Pradesh</td>
                        <td className='border-2 border-gray-200'>Active</td>
                         <td className='border-2 border-gray-200'>
                          <div className='flex'><BorderColorSharp style={{fontSize:'20px'}} className='m-1'/><GroupsIcon style={{fontSize:'20px'}} className='m-1' /><RecentActors style={{fontSize:'20px'}} className='m-1' /></div>
                          <div className='flex'><ArrowDropDownCircle style={{fontSize:'20px'}} className='m-1' /><ArrowForwardSharp style={{fontSize:'20px'}} className='m-1' />
                          <DataUsage style={{fontSize:'20px'}} className='m-1'/>
                          <DeleteSharp style={{fontSize:'20px'}} className='m-1'/></div>
                        </td>
                      </tr>
                      <tr className='text-gray-400'>
                        <td className='border-2 border-gray-200'>3</td>
                        <td className='border-2 border-gray-200'>
                          <div>PPA003 </div>
                          <div>8700254114</div>
                          <div>vpmapay@gmail.com</div> (API Parter)</td>
                        <td className='border-2 border-gray-200'>Rs 690</td>
                        <td className='border-2 border-gray-200'>Rs 0</td>
                        <td className='border-2 border-gray-200'>Rs 0</td>
                        <td className='border-2 border-gray-200'><div>Gautam Budha Nagar</div>Uttar Pradesh</td>
                        <td className='border-2 border-gray-200'>Active</td>
                         <td className='border-2 border-gray-200'>
                          <div className='flex'><BorderColorSharp style={{fontSize:'20px'}} className='m-1'/><GroupsIcon style={{fontSize:'20px'}} className='m-1' /><RecentActors style={{fontSize:'20px'}} className='m-1' /></div>
                          <div className='flex'><ArrowDropDownCircle style={{fontSize:'20px'}} className='m-1' /><ArrowForwardSharp style={{fontSize:'20px'}} className='m-1' />
                          <DataUsage style={{fontSize:'20px'}} className='m-1'/>
                          <DeleteSharp style={{fontSize:'20px'}} className='m-1'/></div>
                        </td>
                      </tr>
                      <tr className='text-gray-400'>
                        <td className='border-2 border-gray-200'>4</td>
                        <td className='border-2 border-gray-200'>
                          <div>PPA003 </div>
                          <div>8700254114</div>
                          <div>vpmapay@gmail.com</div> (API Parter)</td>
                        <td className='border-2 border-gray-200'>Rs 690</td>
                        <td className='border-2 border-gray-200'>Rs 0</td>
                        <td className='border-2 border-gray-200'>Rs 0</td>
                        <td className='border-2 border-gray-200'><div>Gautam Budha Nagar</div>Uttar Pradesh</td>
                        <td className='border-2 border-gray-200'>Active</td>
                         <td className='border-2 border-gray-200'>
                          <div className='flex'><BorderColorSharp style={{fontSize:'20px'}} className='m-1'/><GroupsIcon style={{fontSize:'20px'}} className='m-1' /><RecentActors style={{fontSize:'20px'}} className='m-1' /></div>
                          <div className='flex'><ArrowDropDownCircle style={{fontSize:'20px'}} className='m-1' /><ArrowForwardSharp style={{fontSize:'20px'}} className='m-1' />
                          <DataUsage style={{fontSize:'20px'}} className='m-1'/>
                          <DeleteSharp style={{fontSize:'20px'}} className='m-1'/></div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
