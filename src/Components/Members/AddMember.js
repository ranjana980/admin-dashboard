import React from "react";
import Navbar from "../NavBar/Navbar";
import SideNavbar from "../NavBar/SideNavbar";
import { useDispatch, useSelector } from "react-redux";
import InputComponent from "../../common-component/input-component";
import { Drawer } from "@material-ui/core";

export default function AddMember() {
  const { FormDataReducer } = useSelector((state) => state);
  const { Menu, isMobile } = FormDataReducer;
  const dispatch =useDispatch()

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
        className={`lg:${Menu ? "col-span-10" : "col-span-11"} md:${Menu ? "col-span-10" : "col-span-11"
          } ${isMobile ? " sm:col-span-10" : " sm:col-span-12"} ${isMobile ? " xs:col-span-10" : " xs:col-span-12"
          }  bg-gray-100`}
      >
        <Navbar />
        <div className=" p-3 m-2 text-gray-600 h-[100vh] overflow-scroll ">
          <h4>Team Details</h4>
          <div className="bg-white box-shadow-lg rounded-[5px] mb-[20px] ">
            <div className="bg-[#f8f9fc] p-2 border-b-2 border-gray-200 rounded-tl-[5px] rounded-tr-[5px]">
              <h6 className="font-bold text-teal-500 ">Add Team Details</h6>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-12">
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Name of Client"
                    placeholder="Name of Client"
                    inputStyle="border-gray-700 w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="User Name"
                    placeholder="User Name"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="User Plan"
                    placeholder="User Plan"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="select"
                    options={[
                      { label: "Select Plan" },
                      { label: "Basic Plan" },
                      { label: "Daimond" },
                      { label: "Dikshu India Plan" },
                      { label: "Platinaum" },
                      { label: "Gold" },
                      { label: "Silver" },
                    ]}
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="User Type"
                    placeholder="User Type"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="select"
                    options={[
                      { label: "Select Plan" },
                      { label: "Basic Plan" },
                      { label: "Daimond" },
                      { label: "Dikshu India Plan" },
                      { label: "Platinaum" },
                      { label: "Gold" },
                      { label: "Silver" },
                    ]}
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Team Member"
                    placeholder="Team Member"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="select"
                    options={[
                      { label: "Select Plan" },
                      { label: "Basic Plan" },
                      { label: "Daimond" },
                      { label: "Dikshu India Plan" },
                      { label: "Platinaum" },
                      { label: "Gold" },
                      { label: "Silver" },
                    ]}
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Email"
                    placeholder="Enter Email"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>

                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Mobile Number"
                    placeholder="Enter Mobile No"
                    inputStyle="border-gray-700 w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Alternative Number"
                    placeholder="Alternative Mobile No"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Password"
                    placeholder="Password"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Address"
                    placeholder="User Address"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="District"
                    placeholder="District"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="State"
                    placeholder="State"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Amount Balance"
                    disabled={true}
                    placeholder="Amount Balance"
                    inputStyle="border-gray-700 w-[90%] border rounded-[5px] p-2 bg-gray-200"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Wallet Limit (Hold Money)"
                    placeholder="Wallet Limit"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Credit Amount"
                    placeholder="Credit Amount"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2 bg-gray-200"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Credit Limit"
                    placeholder="Credit Limit"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="date"
                    label="DOB"
                    placeholder="DOB"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="date"
                    label="Company Name"
                    placeholder="Company Name"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Company Type"
                    placeholder="Company Name"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Kyc Verified"
                    placeholder="Not verified"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="GST"
                    placeholder="GST Number"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Pancard"
                    placeholder="Pancard"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Aadhar Card"
                    placeholder="Aadhar Card"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Mobile Verified"
                    placeholder="Name of Client"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="select"
                    options={[
                      { label: "Select" },
                      { label: "Yes" },
                      { label: "No" },
                    ]}
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Email Verified"
                    placeholder="Email Verified"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="select"
                    options={[
                      { label: "Select" },
                      { label: "Yes" },
                      { label: "No" },
                    ]}
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Approved By"
                    placeholder="Approved By"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="select"
                    options={[
                      { label: "Select" },
                      { label: "Approve Now" },
                      { label: "Not yet" },
                    ]}
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Route"
                    placeholder="Route"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="select"
                    options={[
                      { label: "Select" },
                      { label: "Yes" },
                      { label: "No" },
                    ]}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Force Logout"
                    placeholder="Force Logout From All Devices"
                    inputStyle="border-gray-700 w-[90%] bg-teal-400 border rounded-[5px] p-2 placeholder:text-center placeholder:text-white"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="Status"
                    placeholder="Status"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="select"
                    options={[
                      { label: "Select" },
                      { label: "Active" },
                      { label: "Blocked" },
                    ]}
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12"></div>
              </div>
              <div className="grid grid-cols-12">
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12"></div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="text"
                    label="UUID"
                    placeholder="UUID of Device"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12">
                  <InputComponent
                    type="file"
                    label="Profile Pic"
                    inputStyle="border-gray-700  w-[90%] border rounded-[5px] p-2"
                    inputType="input"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12 flex gap-[5px]">
                  <button className="text-white p-2 bg-teal-400 rounded-[5px]">
                    Save
                  </button>
                  <button className="text-white p-2 bg-gray-400 rounded-[5px]">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
