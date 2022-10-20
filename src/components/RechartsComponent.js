import React, { Component } from 'react';
import { Bar, BarChart, Legend, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "date": "2022-10-01"
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "date": "2022-10-10"
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "date": "2022-10-15"
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "date": "2022-10-17"
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "date": "2022-10-20"
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "date": "2022-10-21"
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "date": "2022-10-22"
    }
  ];


class RechartsComponent extends Component {
    render() {
        return (
            
           <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
      
        )

    }

}
export default RechartsComponent;