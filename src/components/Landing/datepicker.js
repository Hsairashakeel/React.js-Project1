import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="awe-calendar to" selected={startDate} onChange={date => setStartDate(date)} monthsShown={2} withPortal/>
  );
};

export default Example;