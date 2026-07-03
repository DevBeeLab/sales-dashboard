// import React from 'react'
import { chartData } from "../data/data"

const RevenueChart = () => {
  const maxValue = Math.max(...chartData.map((data) => data.value))

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">Revenue (last 6 months)</h3>
      <div className="mt-4 flex h-48 items-end gap-2">
        {chartData.map((data) => {
          const barHeight = (data.value / maxValue) * 100

          return (
            <div key={data.month} className="flex flex-1 flex-col items-center">
              <div className="flex h-40 w-full items-end justify-center">
                <div
                  className="w-full min-w-15 rounded-t-lg bg-indigo-500 transition-all duration-300 hover:bg-indigo-600"
                  style={{ height: `${barHeight}%` }}
                />
              </div>
              <span className="mt-2 text-sm text-slate-500">{data.month}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RevenueChart
