import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import bg from '../data/bg.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {

  return (
    <div className="relative p-0">
    <div className="absolute inset-0 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}/>
    <div className="relative">
    <form action="" className='flex items-center flex-col relative top-40'>
      <div>
      <label htmlFor="" className='text-white font-medium text-base'>Email : </label>
      <input type="email" className='border-none outline-none px-2 py-1 box-border shadow-md rounded-md bg-white' />
      </div>
      <button className='my-5 bg-blue-500 focus:outline-none rounded-md px-4 py-1 cursor-pointer text-white'>Submit</button>
    </form>
    </div>
    </div>
  );
};

export default Ecommerce;
