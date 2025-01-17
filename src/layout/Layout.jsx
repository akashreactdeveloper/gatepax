import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ({ title }) => {
    return (
        <div className='flex min-h-screen bg-white z-10'>
            <Sidebar className='shadow-black shadow-lg' />
            <div className='flex-1 md:ml-64 relative'>
                <div className='absolute top-4 right-4'>
                    <button
                        type="button"
                        className="inline-flex justify-center items-center w-10 h-10 rounded-full border shadow-sm bg-blue-600 hover:bg-slate-600 text-sm font-medium focus:outline-none text-white"
                    >
                        E
                    </button>
                </div>
                <div className='mt-20 px-10'>
                    <h1 className='mb-2 text-xl font-semibold text-blue-600'>{title}</h1>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
