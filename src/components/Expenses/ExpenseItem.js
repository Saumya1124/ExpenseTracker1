import React ,{useState} from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import './ExpenseItem.css'
// import ExpenseForm from './ExpenseForm';
const ExpenseItem = (props) => {

    const [title , setTitle] = useState(props.title)

    const clickHandler = ()=>{
        setTitle('Updated')
        console.log(title)
    }

    const [amount,setAmount] = useState(props.amount)

    const changeExpense = ()=>{
        setAmount(100)
    }


    
    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} className='abc'></ExpenseDate>
        <ExpenseDetails title={title} amount={amount} location={props.location}></ExpenseDetails>
        <button onClick={clickHandler}>Change title</button>
        <button onClick={changeExpense}>Change expense</button>
        
    </Card>
    
    );
}

export default ExpenseItem;