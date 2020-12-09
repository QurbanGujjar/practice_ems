import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpence = () => {
  const {transactions} = useContext(GlobalContext)
  const amouts =transactions.map(transaction =>transaction.amount)
  const income = amouts.filter(item =>item > 0).reduce((acc, item)=>(acc += item), 0).toFixed(2)
  const Expense = (amouts.filter(item =>item < 0).reduce((acc, item)=>(acc += item), 0)* -1).toFixed(2)
  // console.log(income)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">{Expense}</p>
        </div>
      </div>

    )
}
