import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income")
  const [transaction, setTransaction] = useState([])
  const handleAddTransaction = () => {
    setTransaction([...transaction, { amount, type }])
    setAmount('')
    setType('income')
  }

  const totalIncome = transaction.reduce((acc, transaction) => transaction.type == "income" ? acc + Number(transaction.amount) : acc, 0)
  const totalExpense = transaction.reduce((acc, transaction) => transaction.type == "Expense" ? acc + Number(transaction.amount) : acc, 0)
  const balance = totalIncome - totalExpense;
  return (
    <>
      <h1 className=' text-5xl mt-4 underline font-semibold text-blue-950 text-center mb-5'>Calculation Of Below Expense Trackor</h1>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center gap-3 my-4'>
          <div className='border-2 border-purple-600 rounded-md p-3 px-5'>
            <h1 className=' font-bold'>Total Income</h1>
            <h1 className=' text-center'>{totalIncome}</h1>
          </div>
          <div className='border-2 border-purple-600 rounded-md p-3 px-5'>
            <h1 className=' font-bold'>Total Expense</h1>
            <h1 className=' text-center'>{totalExpense}</h1>
          </div>
          <div className={`border-2 border-purple-600 rounded-md p-3 px-5 ${balance >= 0 ? 'bg-green-300' : 'bg-red-300'}`}>
            <h1 className=' font-bold'>Balance</h1>
            <h1 className=' text-center'>{balance}</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-[40px]'>
        <div className='flex'>
          <input
            value={amount}
            className='border-2 border-purple-950 rounded-[5px] mx-2 px-2' type="number" placeholder='Add Amount'
            onChange={(e) => { setAmount(e.target.value) }} />
          <select value={type}
            className='border-2 border-purple-950 rounded-[5px] mx-2 px-2'
            onChange={(e) => { setType(e.target.value) }}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <button onClick={handleAddTransaction} className='border-2 border-purple-950 rounded-[5px] mx-2 p-2'>Submit</button>
        </div>
        <div>
          {transaction.map((data, index) => {
            return (
              <div className='flex w-60 mx-2' key={index}>
                <h1 className='font-bold underline text-2xl w-60'>{index + 1 + ') '}{data.amount}</h1>
                <h1 className={`font-bold underline text-2xl w-60 ${data.type === 'income' ? " text-green-400" : "text-red-400"}`}>{data.type}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}


export default App
