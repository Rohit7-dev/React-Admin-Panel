import './charts.css'
import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Charts = ({title, data, dataKey, grid}) => {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#6F2DA8"/>
                    <Line type="monotone" dataKey= {dataKey} stroke="#6F2DA8" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts
