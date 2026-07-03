// import React from 'react'
import { useState } from "react";
import { orders } from "../data/data";
import { Search } from "lucide-react";

const RecentOrders = () => {
    const [query, setQuery] = useState('');
    const filteredOrders = orders.filter((order) =>
        order.customer.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div className="bg-white p-5 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-5 border-b border-slate-200 pb-2">
                <h2 className="text-lg font-semibold text-slate-900">Recent Orders</h2>
                <div className="flex items-center gap-2 border border-slate-300 rounded-lg px-3 py-1">
                <Search className="size{10} text-slate-400" />
                <input 
                    value={query} onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search by customer..." 
                    className="text-sm outline-none placeholder:text-slate-400" 
                />
                </div>
            </div>
            <table className="w-full mt-4 text-sm">
                <thead>
                    <tr className="text-left  text-slate-500">
                        <th className="py-2 px-4">Order ID</th>
                        <th className="py-2 px-4">Customer</th>
                        <th className="py-2 px-4">Amount</th>
                        <th className="py-2 px-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order) => (
                        <tr key={order.id} className="border-t border-slate-100">
                            <td className="py-2 px-4">{order.id}</td>
                            <td className="py-2 px-4">{order.customer}</td>
                            <td className="py-2 px-4">{order.amount}</td>
                            <td className="py-2 px-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                    {order.status}
                                </span>
                            </td> 
                        </tr>
                    ))}
                    {filteredOrders.length === 0 && (
                        <tr>
                            <td colSpan="4" className="py-2 px-4 text-center text-slate-500">
                                No orders found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default RecentOrders
