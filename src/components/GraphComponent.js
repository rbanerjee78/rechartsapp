import React, {useState, useEffect} from 'react';
import { Area, AreaChart, Legend, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';
import moment from 'moment/moment';

function GraphComponent(){

    var dataList = [
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

      
    
      const  [initialData, setData] = useState(dataList);
      const [selectedTime, setSelectedTime] = useState();

      const filterByTime = (filteredData) => {
        // Avoid filter for null value
        if (!selectedTime) {
          return filteredData;
        }
    
        const filteredTime = filteredData.filter(
          (data) => data.date > selectedTime
        );
        return filteredTime;
      };

      const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
      };
      
      useEffect(() => {
        var filteredData = filterByTime(dataList);        
        setData(filteredData);
      }, 
      [selectedTime]);

     
    
    //declaring time dropdown variables
    let today = moment();
    let sevenDays = moment().subtract(7, 'days').format('YYYY-MM-DD');
    let fifteenDays = moment().subtract(15, 'days').format('YYYY-MM-DD');
    let oneMonth = moment().subtract(1, 'month').format('YYYY-MM-DD');

     
     
    

      return ( 
        <div> 
         <p style={{"textAlign": "left", "width":"800px"}}> <select onChange={handleTimeChange} value={selectedTime}>
            <option>Select</option>
            <option value={sevenDays}>7 days ago</option>
            <option value={fifteenDays}>15 days ago</option>
            <option value={oneMonth}>1 month ago</option>
            </select>       
            </p>

<AreaChart width={800} height={400} data={initialData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid />
        <Area type="monotone" dataKey="pv" stroke="#8884d8" />
      </AreaChart>
        </div>              
        
        )
     
   
     
   
}

export default GraphComponent;