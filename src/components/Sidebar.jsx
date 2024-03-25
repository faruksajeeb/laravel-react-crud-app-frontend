import React, { useState } from "react";
import { FaArrowCircleLeft,FaSearch,FaAngleDown  } from 'react-icons/fa';
import { AiFillApi,AiOutlineDashboard,AiFillBug  } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";

const Sidebar = () => {
    const [sidebarOpen,setSidebarOpen] = useState(true);
    const [submenuOpen,setSubmenuOpen] = useState(true);
    const Menus = [
      {title:"Dashboard"},
      {title:"Pages",icon:<SiPowerpages/>},
      {title:"Medias",spacing:true},
      {
        title:"Projects",
        submenu:true,
        submenuItems:[
          {title:'Submenu 1',icon:<AiFillBug/>},
          {title:'Submenu 1',icon:<AiFillBug/>},
          {title:'Submenu 1',icon:<AiFillBug/>},
        ]
      },
      {title:"Analysis"},
      {title:"Inbox",icon:<MdForwardToInbox/>},
      {title:"Profile",spacing:true},
      {title:"Settings",icon:<CiSettings/> },
      {title:"Logout"}
    ]
  return (
    <div className="flex">
    <div className={`bg-purple-900 text-white h-screen ${sidebarOpen ? "w-64":"w-20"} relative duration-300`}>
        <FaArrowCircleLeft className={`${!sidebarOpen && 'rotate-180'} bg-white text-purple-900 text-3xl rounded-full absolute -right-3 top-5 border border-dark-purple cursor-pointer`} onClick={()=>setSidebarOpen(!sidebarOpen)}/>
      
      <div className="p-4 inline-flex">
        <AiFillApi className={`${!sidebarOpen ? 'text-5xl' : 'text-3xl'} rounded duration-500 cursor-pinter block float-left mr-2 ${!sidebarOpen && 'rotate-[360deg]'}`}/>
        <h1 className={`text-xl origin-left font-medium duration-300 ${!sidebarOpen && 'scale-0'}`}>Company Name</h1>
     </div>
     {/* <div className="border-t border-gray-600"></div> */}
{/* 
     <div className={`flex rounded-md items-center bg-white bg-opacity-30 mx-2 mt-6 ${!sidebarOpen ? "px-2.5": "px-4"} py-2`}>
        <FaSearch className={`text-white text-lg block float-left cursor-pointer ${!sidebarOpen && 'mr-2'}`}/>
        <input type={'search'} className={`text-base bg-transparent p-0 m-0 border-none ml-2 w-full text-white focus:outline-none ${!sidebarOpen && 'hidden'} `} placeholder="Search"/>
    </div> */}
      
      <ul className="flex-1 mt-6">
      
        {
         
          Menus.map((menu,index)=>(
            <>
              <li key={index} className={`flex text-gray-300 text-sm item-center gap-x-3 cursor-pointer p-2 px-4 hover:bg-white hover:text-purple-800 duration-300 ${menu.spacing ? 'mt-6':''}`}>
                <span className={`text-3xl block float-left`}>
                  {
                    menu.icon ? menu.icon : <AiOutlineDashboard/>
                  }                  
                  </span>
                <span className={`text-base font-medium flex flex-1 duration-200 ${!sidebarOpen && 'hidden'}`}>
                  {menu.title}                  
                  </span> 
                  {
                  menu.submenu && sidebarOpen && (
                    <FaAngleDown className={`float-right duration-200 text-xl ${submenuOpen && 'rotate-180'}`} onClick={()=>setSubmenuOpen(!submenuOpen)} />
                  )
                }
                </li>
                {
                  menu.submenu && submenuOpen && sidebarOpen && (
                    <ul className="duration-200">
                      {
                    menu.submenuItems.map((submenuItem,index)=>(
                      <li className={`flex text-gray-300 text-sm item-center gap-x-3 cursor-pointer p-2 pl-12 hover:bg-white hover:text-purple-800 duration-300 ${menu.spacing ? 'mt-9':''}`} key={index}>
                        <span className={`text-3xl block float-left`}>
                  {
                    submenuItem.icon ? submenuItem.icon : <AiOutlineDashboard/>
                  }                  
                  </span>
                        <span>{submenuItem.title}</span>
                        </li>
                    ))}
                    </ul>
                  )
                }
                </>
          ))
        }
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
