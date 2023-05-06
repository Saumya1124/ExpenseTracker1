import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './ExpenseForm.css'

const AddExpense = (props)=> {

    const [btn, setBtn] = useState(false)

    if(btn == true){
        return (
            <ExpenseForm onSaveData={props.item}></ExpenseForm>
        )
    }
    
    return(
        <div className="new-expense">
            <button onClick={()=>setBtn(true)} className="new-expense">Add Expense</button>
        </div>
         
    )
}

export default AddExpense