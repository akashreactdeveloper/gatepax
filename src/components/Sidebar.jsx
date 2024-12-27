import React, { useState } from 'react';
import Dropdown from './UI_Components/Dropdown';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { RiFolderCheckFill } from "react-icons/ri";
import { MdIntegrationInstructions } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";

const menuItems = [
    { name: 'Accounts', link: '/accounts', icon: <FaUser /> },
    { name: 'Integrations', link: '/integrations', icon: <MdIntegrationInstructions className='text-xl -ml-1' /> },
    { name: 'Knowledge Configuration', link: '/knowledge-configuration', icon: <RiFolderCheckFill className='text-xl -ml-1' /> },
    { name: 'Subscriptions', link: '/subscriptions', icon: <PiMonitorFill className='text-xl -ml-1' /> },
    { name: 'Performance Monitoring', link: '/performance-monitoring', icon: <BsGraphUp /> }
];

const Sidebar = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="md:hidden fixed top-0 left-0 p-4 z-50">
                <button onClick={toggleSidebar}>
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>
            <div className={`fixed left-0 z-20 bg-white top-0 w-64 h-full p-5 shadow-md flex flex-col transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${className}`}>
                <h2 className="mt-2">Gatepax AI</h2>
                <ul className="list-none flex-grow mt-6">
                    {menuItems.map((item, index) => (
                        <li key={index} className="my-6 flex items-center">
                            <span className="mr-2">{item.icon}</span>
                            <a href={item.link} className="text-gray-800 no-underline hover:text-blue-500">{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto">
                    <Dropdown />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
