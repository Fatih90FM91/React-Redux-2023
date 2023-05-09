import React from 'react'
import TopFold from '../../components/topfold/topFold';
import './add-expense.css'
import AddForm from '../../components/add-form/add-form';

const AddExpense = () => {
  return (
    <div className='add-expense'>
        <TopFold/>
        <AddForm/>
    </div>
    
  )
}

export default AddExpense;