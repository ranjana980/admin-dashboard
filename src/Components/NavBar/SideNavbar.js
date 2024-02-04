import React, { useState } from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { navBarItems } from "../../constants/table-contstant";
import IconRenderer from "../../utils/Icons";

export default function SideNavbar() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const FormData = useSelector((state) => state.FormDataReducer);
  const { Menu, isMobile } = FormData;
  const dispatch = useDispatch();

  return (
    <div className={`text-white   ${Menu ? "w-[240px]" : "w-[90px]"} `}>
      <div className={`mt-4 overflow-y-scroll side-navbar ${Menu ? "h-[460px]" : "h-[510px]"}`}>
        {navBarItems.map((item, index) => (
          <React.Fragment key={`${item.label}-${index}`}>
            <div
              className={`justify-between cursor-pointer text-center ${item.border ? " border-b  solid border-teal-200" : ""
                } ${Menu ? 'p-2 flex' : 'block'} `}
              onClick={() => {
                if (item.route) navigate(item.route);
                else setId(id !== item.label ? item.label : "");
              }}
            >
              <div className={`${Menu ? "flex" : "block"}`}>
                <IconRenderer
                  iconName={item.icon}
                  style={{ fontSize: "20px" }}
                  className={
                    item.label === "Dashboard"
                      ? "fa fa-tachometer text-sm text-white"
                      : ""
                  }
                />
                <h6 className={`${Menu ? "ml-3 text-sm" : "pl-0 text-xs"}  `}>
                  {item.label}
                </h6>
              </div>
              {Menu &&
                item.arrow &&
                (id == item.label ? (
                  <KeyboardArrowDown style={{ fontSize: "20px" }} />
                ) : (
                  <KeyboardArrowRight style={{ fontSize: "20px" }} className="" />
                ))}
            </div>
            {item.subnavMenu.length > 1 && id === item.label && (
              <div className="bg-white absolute w-[150px]  ml-3 p-2 rounded-[5px]">
                {item.subnavMenu?.map(({ label, route }, index1) => (
                  <div
                    key={`${label}-${index1}`}
                    className="p-[4px] rounded-[5px] hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate(route)}
                  >
                    <p className="p-[4px] text-black leading-[0px] text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {!isMobile && (
        <div
          className="p-1  text-center mt-4  flex justify-center  text-gray-300 bg-[#e9efef4a] w-[35px] rounded-[50%] cursor-pointer"
          onClick={() => dispatch({ type: "MENU", payload: !Menu })}
        >
          {Menu ? (
            <KeyboardArrowLeft style={{ fontSize: "25px" }} />
          ) : (
            <KeyboardArrowRight style={{ fontSize: "25px" }} />
          )}
        </div>
      )}
    </div>
  );
}
