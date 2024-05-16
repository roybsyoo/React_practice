import React from 'react';
import './ExpenseForm.css';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({ charge, handleCharge, count, handleAmount, handleSubmit, edit }) => {    
        return (
            <form onSubmit={handleSubmit}> 
            <><div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='charge'>상품</label>
                    <input
                        type='text'
                        className='form-control'
                        id='charge'
                        name='charge'
                        placeholder='예) 콜라'
                        value={charge}
                        onChange={handleCharge} 
                        />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>갯수</label>
                    <input
                        type='number'
                        className='form-control'
                        id='amount'
                        name='amount'
                        value={count}
                        onChange={handleAmount}

                        placeholder='갯수를 입력 해  주세요' />
                </div>
            </div><button type='submit' className='btn'>
            {edit ? '수정' : '제출'}
            <MdSend className='btn-icon' />
                </button></>


            </form>
            
        )
    }
export default ExpenseForm;
