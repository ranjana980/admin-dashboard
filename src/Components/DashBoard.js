import React from 'react'
import MyTableComponent from '../common-component/table-component'
import { cardData, turnoverColumns, turnoverData } from '../constants/table-contstant'
import IconRenderer from '../utils/Icons'

export default function DashBoard() {
  return (
    <div className='bg-gray-100 p-3 h-[100vh] overflow-scroll'>
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
              <input type='date' className='border-gray-700 border rounded-[5px] p-2 xl:min-w-[200px] md:min-w-[50px] md:max-w-[120px] sm:min-w-[600px]  xs:min-w-[250px]' />
            </div>
            <div className='lg:ml-5  md:ml-5 sm:ml-0  xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12 sm:mt-2 xs:mt-2 xl:mt-0 md:mt-0'>
              <p className='leading-[12px]'>To Date</p>
              <input type='date' className='border-gray-700 border rounded-[5px] p-2 xl:min-w-[200px] md:min-w-[50px] md:max-w-[120px] xs:min-w-[250px] sm:min-w-[600px]' />
            </div>
            <div className='xl:ml-8 lg:ml-8  md:ml-10 sm:ml-0 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12'>
              <button className='bg-teal-500  lg:min-w-[130px] md:min-w-[70px] p-2 text-white rounded-[5px] mt-6 xl:min-w-[190px] sm:min-w-[600px]  xs:min-w-[250px]'>Seacrh</button>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-1 '>
        {cardData.map(({ bgColor, color, status, amount, total, totaltype, icon, line },index) => (
          <div key={index} className={`${bgColor} xl:col-span-3  md:col-span-6 box-shadow-lg sm:col-span-12 xs:mt-5 xs:col-span-12 lg:ml-5 md:ml-5  rounded-[5px] `}>
            <div className={`p-3 flex  ${color} justify-between ${line ? `bg-white ml-1 `:''} `}>
              <div className='leading-[5px] p-3'>
                <p>{status}</p>
                <p>Rs {amount}</p>
                {total !== false && <p>{totaltype} : {total} </p>}
              </div>
              <IconRenderer iconName={icon} className={color} style={{ fontSize: '35px' }} />
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-12 mt-3 '>
        <div className='xl:col-span-6 md:col-span-12  lg:col-span-6 sm:col-span-12 xs:col-span-12'>
          <div className='bg-white box-shadow-lg rounded-[5px]'>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='font-bold text-teal-500 '>Turnover Service Wise</h6>
            </div>
            <div className='p-4'>
              <MyTableComponent
                thStyle={'border-2 border-gray-200 bg-gray-100'}
                columns={turnoverColumns} data={turnoverData} />
            </div>
          </div>
        </div>
        <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 md:mt-5 lg:mt-0 xs:col-span-12 xs:mt-5 sm:mt-5 sm:col-span-12'>
          <div className='bg-white box-shadow-lg rounded-[5px] '>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='font-bold text-teal-500 '>Revenue Service Wise</h6>
            </div>
            <div className='p-4'>
              <MyTableComponent
                thStyle={'border-2 border-gray-200 bg-gray-100'}
                columns={turnoverColumns} data={turnoverData} />
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
              <h6 className='font-bold text-teal-500 '>Revenue Service Wise</h6>
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
              <h6 className='font-bold text-teal-500 '>Turnover Operator Wise</h6>
            </div>
            <div className='p-4'>

            </div>
          </div>
        </div>
        <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 sm:mt-5 md:mt-5 xs:col-span-12 xs:mt-5 lg:mt-0 sm:col-span-12'>
          <div className='bg-white box-shadow-lg rounded-[5px] h-[350px] '>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='font-bold text-teal-500 '>Revenue Operator Wise</h6>
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
              <h6 className='font-bold text-teal-500 '>Turnover User Wise</h6>
            </div>
            <div className='p-4'>

            </div>
          </div>
        </div>
        <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 md:mt-5 xs:col-span-12 xs:mt-5 sm:mt-5 lg:mt-0 sm:col-span-12'>
          <div className='bg-white box-shadow-lg rounded-[5px] h-[350px] '>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='font-bold text-teal-500 '>Revenue User Wise</h6>
            </div>
            <div className='p-4'>

            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 mt-3 '>
        <div className='xl:col-span-6 md:col-span-12  lg:col-span-6 sm:col-span-12 xs:col-span-12'>
          <div className='bg-white box-shadow-lg rounded-[5px]'>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='font-bold text-teal-500 '>Turnover Api Wise</h6>
            </div>
            <div className='p-4'>
              <MyTableComponent
                thStyle={'border-2 border-gray-200 bg-gray-100'}
                columns={turnoverColumns} data={turnoverData} />
            </div>
          </div>
        </div>
        <div className='lg:col-span-6 md:col-span-12 lg:ml-5 md:ml-0 md:mt-5 lg:mt-0 xs:col-span-12 xs:mt-5 sm:mt-5 sm:col-span-12'>
          <div className='bg-white box-shadow-lg rounded-[5px] '>
            <div className='bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]'>
              <h6 className='font-bold text-teal-500 '>Revenue Api Wise</h6>
            </div>
            <div className='p-4'>
              <MyTableComponent
                thStyle={'border-2 border-gray-200 bg-gray-100'}
                columns={turnoverColumns} data={turnoverData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
