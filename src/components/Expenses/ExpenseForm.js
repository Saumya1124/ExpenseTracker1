import { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle , setNewTitle] = useState('')


    const titleChangeHandler = (event) => {

        const title1 = event.target.value

        setNewTitle(title1)

        console.log(enteredTitle)
    }

    const [enteredAmount , setNewAmount] = useState('')


    const amountChangeHandler = (event) => {


        const amount1 = event.target.value

        setNewAmount(amount1)

        console.log(enteredAmount)
    }

    const [enteredDate , setNewDate] = useState('')


    const dateChangeHandler = (event) => {


        const date1 = event.target.value

        setNewDate(date1)

        console.log(enteredDate)
    }




    const submitHandler = (event) => {
        event.preventDefault()

        const obj = {
            title : enteredTitle,
            amount : enteredAmount,
            date : enteredDate
        }

       console.log(obj)

       const item = document.getElementById('items')

       const li = document.createElement('li');
       li.className = 'list';
       li.appendChild(document.createTextNode(obj.title+' '+obj.amount+' '+obj.date));
       item.appendChild(li);

       props.onSaveData(obj)

       setNewTitle('');
       setNewAmount('');
       setNewDate('');
        
    }




    // Multiple states in one line 

    // const [userInput , setUserInput] = useState(
    //     {
    //         enteredTitle : '',
    //         enteredAmount : '',
    //         enteredDate : '',

    //     }
    // )

    // const titleChangeHandler = (event) => {

    //     console.log(event.target.value)

    //     const title1 = event.target.value

    //     setNewTitle({
    //         ...userInput,
    //         enteredTitle:event.target.value 
    //     })

    //     console.log(enteredTitle)

    //     setUserInput ((prevState) => {
    //         return {...prevState ,
    //              enteredTitle:event.target.value,
    //              enteredAmount : event.target.value,
    //              enteredDate : event.target.value
    //             }
    //     })
    // }

    return (
        <div className="new-expense">
            <h3>Add New Expense</h3>
            <form onSubmit = {submitHandler}>

                <div className="new-expense__controls">
                      
                      <div className="new-expense__control">
                         <label>Title</label>
                         <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>

                      </div>

                      <div className="new-expense__control">
                         <label>Amout</label>
                         <input type="text" value={enteredAmount} onChange={amountChangeHandler}></input>

                      </div>

                      <div className="new-expense__control">
                         <label>Date</label>
                         <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>

                      </div>

                </div>

                <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                </div>
{/*                   
                  <input type="text" placeholder='Expense title' id = 'title'></input>
                  <br></br>
                  <input type="text" placeholder='Expense amount'></input>
                  <br></br>
                  <input type="text" placeholder='Expense date'></input>
                  <br></br>
                  <button onClick={storingData}>Submit</button> */}

        
            </form>

            <div>
                <ul id="items">

                    

                </ul>
            </div>

            
        </div>
    )

}

export default ExpenseForm