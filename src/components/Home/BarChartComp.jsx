import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function BarChartComp() {
  const data = [
    { name: 'Page A', uv: 4000 },
    { name: 'Page B', uv: 3000 },
    { name: 'Page C', uv: 2000 },
    { name: 'Page D', uv: 2780 },
    { name: 'Page E', uv: 1890 },
    { name: 'Page F', uv: 2390 },
    { name: 'Page G', uv: 3490 },
  ]
  return (
    <div className='p-2'>
      <div>Barchart</div>
      <div style={{ height: '92%', fontSize: '12px' }}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart width={150} height={40} data={data}>
            <XAxis axisLine={false} />
            <Bar dataKey='uv' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartComp
