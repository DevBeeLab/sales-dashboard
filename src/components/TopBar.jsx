// import React from 'react'

const TopBar = () => {
    return (
        <div>
            <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-6">
                <div>
                    <h1 className="text-lg font-semibold text-slate-900 ">Good Evening, User.</h1>
                    <p className="text-sm text-slate-500 ">Welcome back to your dashboard.</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-slate-200"></div>
            </header>
        </div>
    )
}

export default TopBar
