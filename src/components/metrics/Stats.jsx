import React from 'react'
import defaultStats, { getDefaultStats } from '../../utils/data/stats'

const Stats = () => {
  const statsData = getDefaultStats()

  return (
	<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {statsData.map(({ title, count, color, icon, bcg }) => (
                <div
                  key={title}
                  className={`bg-isWhite px-8 pt-12 pb-7 rounded-r25 border-b-[5px]`}
                  style={{ borderBottom: `5px solid ${color}` }}
                >
                  <div className="flex justify-between">
                    <h1
                      className={`font-extrabold text-5xl`}
                      style={{ color: color }}
                    >
                      {count}
                    </h1>
                    <span
                      className={`block p-5 py-4 rounded-r25 bg-red-300 text-3xl`}
                      style={{ color: color, backgroundColor: bcg }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h4 className="tracking-wider text-xl text-gray-600 mt-5 capitalize">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
  )
}

export default Stats