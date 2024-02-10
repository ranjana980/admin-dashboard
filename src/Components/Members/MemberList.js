import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import SideNavbar from "../NavBar/SideNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  BorderColorSharp,
  RecentActors,
  ArrowBackSharp,
  ArrowForwardSharp,
  DeleteSharp,
  DataUsage,
  Group,
} from "@material-ui/icons";
import { memberListColumns, memberListData } from "../../constants/table-contstant";
import MyTableComponent from "../../common-component/table-component";
import { Drawer } from "@material-ui/core";

const TableAction = () => {
  return <>
    <div className="flex">
      <BorderColorSharp
        style={{ fontSize: "20px" }}
        className="m-1"
      />
      <Group
        style={{ fontSize: "20px" }}
        className="m-1"
      />
      <RecentActors
        style={{ fontSize: "20px" }}
        className="m-1"
      />
    </div>
    <div className="flex">
      <ArrowBackSharp
        style={{ fontSize: "20px" }}
        className="m-1"
      />
      <ArrowForwardSharp
        style={{ fontSize: "20px" }}
        className="m-1"
      />
      <DataUsage
        style={{ fontSize: "20px" }}
        className="m-1"
      />
      <DeleteSharp
        style={{ fontSize: "20px" }}
        className="m-1"
      />
    </div></>
}

export default function MemberList() {
  const { FormDataReducer } = useSelector((state) => state);
  const { Menu, isMobile } = FormDataReducer;
  const [tableData, setTableData] = useState(memberListData)
  const dispatch =useDispatch()

  useEffect(() => {
    setTableData(memberListData.map((item) => {
      return {
        ...item,
        action: <TableAction />,
        user: <div> <div>{item.userId} </div>
          <div>{item.phone}</div>
          <div>{item.email}</div>{item.position}</div>,
        location: <div>{item.location.split('/n')[0]}<br />{item.location.split('/n')[1]}</div>
      }
    }))
  }, [memberListData])

  return (
    <div className="grid grid-cols-12 ">
      <div
        className={`${Menu ? "lg:col-span-2" : "lg:col-span-1"} ${Menu ? "md:col-span-2" : "md:col-span-1"
          } ${Menu ? "xl:col-span-2" : "xl:col-span-1"}  ${isMobile ? "sm:block sm:col-span-2" : "sm:hidden sm:col-span-0"
          } ${isMobile ? "xs:block xs:col-span-2" : "xs:hidden xs:col-span-0"
          } md:block lg:block xl:block`}
      >
       {isMobile ? <Drawer open={isMobile} anchor='left' onClose={() => { dispatch({ type: 'MOBILE', payload: !isMobile }) }}>
          <SideNavbar />
        </Drawer> : <SideNavbar />}
      </div>
      <div
        className={`${Menu ? "lg:col-span-10" : "lg:col-span-11"} ${Menu ? "md:col-span-10" : "md:col-span-11"
          } ${Menu ? "xl:col-span-10" : "xl:col-span-11"} ${isMobile ? " sm:col-span-10" : " sm:col-span-12"
          } ${isMobile ? " xs:col-span-10" : " xs:col-span-12"} bg-gray-100`}
      >
        <Navbar />
        <div className=" p-3 m-2 text-gray-600 h-[100vh] overflow-scroll">
          <h4>Clients</h4>
          <div className="bg-white box-shadow-lg rounded-[5px]  ">
            <div className="bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]">
              <h6 className="font-bold text-teal-500 ">List of Members</h6>
            </div>
            <div className="p-4">
              <MyTableComponent
                trStyle={"text-gray-400"}
                columns={memberListColumns} data={tableData}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
