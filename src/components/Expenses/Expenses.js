import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props){

    const [filteredYear,setFilteredYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filteredYear;
    })

    return(
        <Card className='expenses'>
            <ExpenseFilter selectedYear={filteredYear} onYearChange = {yearChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
    </Card>
    );
}
export default Expenses;