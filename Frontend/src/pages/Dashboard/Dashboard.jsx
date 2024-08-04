import React from 'react'
import AppBar from '../../components/AppBar';
import Balance from '../../components/Balance';
import User from '../../components/User';

const Dashboard = () => {
  return (
    <div className='overflow-hidden'>
      <AppBar />
      <Balance value={"10,000"} />

      <User />
    </div>
  );
}

export default Dashboard;