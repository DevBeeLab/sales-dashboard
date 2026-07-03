import { useState } from "react";
// import React from 'react'
import { navItems } from "../data/data"

const SideBar = () => {
    const [active, setActive] = useState('Overview');

    return (
        <aside className="flex w-50 flex-col border-r border-slate-200 bg-white p-4">
            <div className="flex  gap-2 items-center">
                <div className="w-8 h-8 rounded-lg bg-indigo-600" />
                <span className="text-lg font-semibold text-slate-900">DevBee</span>
            </div>
            <nav className="mt-6 flex-1 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.name === active;
                    return (
                        <button
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-slate-700 hover:bg-slate-100'}`}
                        >
                            {Icon ? <Icon className="h-4 w-4" /> : null}
                            <span>{item.name}</span>
                        </button>
                    )
                })}
            </nav>
        </aside>
    )
}

export default SideBar
