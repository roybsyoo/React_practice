import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from 'react-icons/md';




const ExpenseList = ({ expenses, initialExpenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <React.Fragment>
            
            <ul className='list'>
                {initialExpenses.map(expense =>{
                    return(
                        <ExpenseItem key={expense.id} exprense={expense}
                        handleDelete={handleDelete} handleEdit={handleEdit}/>
                    )
    })}

            </ul>
            {expenses.length > 0 ?
            <button className='btn' onClick={clearItems}>
                    목록 지우기
                    <MdDelete className='btn-icon' />
                </button>
                :null
            }
                </React.Fragment>
  )
}

export default ExpenseList

