import React, { useState } from "react"
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {


  
const [expenses, setExpenses] = useState([
  { id: 1, charge: '와인', count: 1 },      
  { id: 2, charge: '빵', count: 1 },
  { id: 3, charge: '맥북', count: 1 },
])

const [charge, setCharge] = useState("");
const [count, setCount] = useState(0);
const [id, setId] = useState('');
const [edit, setEdit] = useState(false);
const [alert, setAlert] = useState({ show: false});


const handleCharge = (e) => {
  setCharge(e.target.value);

}
const handleAmount = (e) => {
  setCount(e.target.valueAsNumber)
}
const handleEdit = id => {
  const expense = expenses.find(item => item.id === id);
  const { charge, count } = expense;
  setCharge(charge);
  setCount(count);
  setId(id);
  setEdit(true);
}
const handleSubmit = (e) => {
  e.preventDefault();
  if (charge !== "" && count > 0) {

    if (edit) {
      const newExpenses = expenses.map(item => {
        return item.id === id ? { ...item, charge, count } : item;
      })

      setExpenses(newExpenses);
      setEdit(false);
      handleAlert({ type: "success", text: "아이템이 수정되었습니다." });
    } else {
      const newExpense = { id: crypto.randomUUID(), charge, count }
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
    }
    setCharge("");
    setCount(0);
  } else {
    handleAlert({ type: "danger", text: "charge는 빈 값일 수 없으며 amount 값은 0보다 커야 합니다." });

  }
}
const handleAlert = ({ type, text }) => {
  setAlert({ show: true, type, text });
  setTimeout(() => {
    setAlert({ show: false })
  }, 7000);
}
  
  const handleDelete = (id) => {
    const newExpense = expenses.filter(expense => expense.id !== id)

    setExpenses(newExpense)
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다." });
    
  }
  const clearItems = () => {
    setExpenses([]);
  }
  
    return (
      
      <main className="main-container">
      <div className="sub-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1 style={{width:'100%', padding: '1rem', borderRadius:'5px' }}>장보기 List 🛒</h1>
      
      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
       {/* Expense Form */}
       <ExpenseForm edit={edit} charge={charge} handleSubmit={handleSubmit} handleCharge={handleCharge} amount={count} handleAmount={handleAmount}/>
      </div>

      <div style={{ width: '100', backgroundColor: 'white', padding: '1rem'}}>
       {/* Expense List */}
       <ExpenseList expenses={expenses} clearItems={clearItems} handleEdit={handleEdit} initialExpenses={expenses} handleDelete={handleDelete}/>
      </div>

      
      

</div>
</main>
    )

    }
  
export default App;