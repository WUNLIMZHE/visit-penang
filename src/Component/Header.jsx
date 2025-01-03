import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function Header(props){
  return (
    <div className="header flex mb-6">
      <h1 className="header-text font-bold text-3xl border-b-4 border-theme-700 w-min whitespace-nowrap">{props.headerName}</h1>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="filter-slidebar inline-flex w-full justify-center gap-x-1.5 rounded-md ml-3 px-3 pt-3 text-lg font-semibold text-gray-900 ">
            Academic sessions
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                onClick={() => props.onClick("All")}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                All
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => props.onClick("2023/2024")}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                2023/2024
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => props.onClick("2022/2023")}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                2022/2023
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => props.onClick("2021/2022")}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                2021/2022
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <br></br>
    </div>
  );
}

export default Header;