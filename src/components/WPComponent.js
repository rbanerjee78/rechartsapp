import React, {useState, useEffect} from 'react';
import { Area, AreaChart, Legend, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';
import moment from 'moment/moment';


function WPComponent(){

  let [data, setData] = useState([]);
  let [selectedTime, setSelectedTime] = useState("");
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = () => {
    fetch(`http://localhost/wordpress/wordpress/wp-json/wp/v2/posts`)
      .then(response => response.json())
      .then(json => setData(json))
  }

  let today = moment();
  let sevenDays = moment().subtract(7, 'days').format('YYYY-MM-DD');
  let fifteenDays = moment().subtract(15, 'days').format('YYYY-MM-DD');
  let oneMonth = moment().subtract(1, 'month').format('YYYY-MM-DD');


// Added to filter out zero values form the API
//data = data.filter(a => (a.date));


const handleTimeChange = (event)=>{
   var filteredData = event.target.value;
   data = data.filter(a => a.date > filteredData);      
   console.log(data);
   setSelectedTime(event.target.value);
   setData(data);
}
const dateFormatter = date => {
  // return moment(date).unix();
  return moment(date).format('YYYY-MM-DD');
};

return (
  <>
  <p style={{"textAlign": "left", "width":"800px"}}> 
  <select onChange={handleTimeChange} value={selectedTime}>
            <option value={''}>Select</option>
            <option value={sevenDays}>7 days ago</option>
            <option value={fifteenDays}>15 days ago</option>
            <option value={oneMonth}>1 month ago</option>
            </select>       
            </p>
  <div>
    <AreaChart width={800} height={400} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="date" tickFormatter={dateFormatter} />
      <YAxis />
      <Tooltip />
      <CartesianGrid />
      <Legend />
      <Area type="monotone" dataKey="id" stroke="#8884d8" />
    </AreaChart>
  </div>
  </>
);
}

export default WPComponent;