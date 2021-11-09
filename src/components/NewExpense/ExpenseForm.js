import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {

    //#region States for Inputs
    const [titleInput,setTitleInput] = useState('');
    const [amountInput,setAmountInput] = useState('');
    const [dateInput,setDateInput] = useState('');
    //#endregion

    //#region eventHandlers

    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDateInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title : titleInput,
            amount : Number(amountInput),
            date : new Date(dateInput)
        }
        props.onSaveExpenseData(ExpenseData);
        //console.log(ExpenseData);
        setTitleInput('');
        setAmountInput('');
        setDateInput('');
    }

    //#endregion

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={titleInput} onChange={titleChangeHandler} required/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={amountInput} onChange={amountChangeHandler} required/>
                </div>
                <div className='new-expense__control'>
                    <label>date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={dateInput} onChange={dateChangeHandler} required/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>New Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;