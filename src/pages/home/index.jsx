import React from 'react'
import './home.css'
import TopFold from '../../components/topfold/topFold'
import ExpenseList from '../../components/expense-list/expense-list'

const Home = () => {
  return (
    <div className='home'>
        <TopFold/>
        
        <ExpenseList/>
    </div>
  )
}

export default Home;

