import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props)=> {
    
    

    if(props.item.length == 0){
        return <h2 className="expenses-list__fallback">No expenses</h2>
    }
    if(props.item.length==1){
        return (<ul className="expenses-List">
                    {props.item.map((expense) => 
                        <ExpenseItem 
                            key = {expense.id}
                            title = {expense.title}
                            amount = {expense.amount}
                            date = {expense.date}
                        />
                    )}

                    <h2 className="expenses-list__fallback">Only Single expenses found.Add More</h2>
                </ul>
               
                )

    }

    return (
       <ul className="expenses-List">
            {props.item.map((expense) => 
                <ExpenseItem 
                    key = {expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                />
            )}
       </ul>
    )
}

export default ExpensesList