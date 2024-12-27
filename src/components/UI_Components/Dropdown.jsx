import React, { useState } from 'react';
import { RiUserSettingsFill } from "react-icons/ri";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const menuItems = [
        { label: 'Prompts', href: '#' },
        { label: 'Email header filtering', href: '#' },
        { label: 'LLM settings', href: '#' },
        { label: 'Knowledge settings', href: '#' },
        { label: 'Tenant management', href: '#' },
        { label: 'Users', href: '#' },
        { label: 'Roles and permissions', href: '#' },
        { label: 'Billing admin', href: '#' }
    ];

    return (
        <div className="relative inline-block text-left">
            <div className="flex">
                <button
                    type="button"
                    className="inline-flex justify-center items-center w-10 h-10 rounded-full border shadow-sm bg-blue-600 hover:bg-slate-600 text-sm font-medium focus:outline-none"
                    onClick={toggleDropdown}
                >
                    <RiUserSettingsFill className='text-lg text-white' />
                </button>

                {isOpen && (
                    <div className="absolute left-full bottom-full ml-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <h3 className="px-4 py-2 text-sm font-semibold text-gray-900">Additional settings</h3>
                            {menuItems.map(item => (
                                <a key={item.label} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
