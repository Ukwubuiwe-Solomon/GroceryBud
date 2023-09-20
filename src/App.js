// import React from 'react'
// import NavBar from './components/NavBar';
// import Hero from './components/Hero';
// import Analystics from './components/Analystics';
// import NewLetter from './components/NewLetter';
// import Cards from './components/Cards';
// import Footer from './components/Footer';
import React, {useState, useEffect} from 'react'
import List from './component/List';
import Alert from './component/Alert';

const getLocalStorage = () =>{
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show:false, msg:''})

  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log('hello')
    if(!name){
      //display alert
      showAlert(true,"Please enter a value")
    }
    else if (name && isEditing){
      setList(list.map((item)=>{
        if(item.id === editID){
          return {...item, title:name}
        }
        return item
      }))
      setName("")
      setEditID(null)
      setIsEditing(false)
      showAlert(true, "Value Changed")
    }
    else{
      showAlert(true, "Item added to the List")
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem])
      setName('')
    }
  }
  const showAlert = (show= false, msg="")=>{
    setAlert({show,msg})
  }
  const clearList = ()=>{
    showAlert(true, "Empty List")
    setList([])
  }
  const removeItem = (id) =>{
    showAlert(true, "Item was removed")
    setList(list.filter((item)=> item.id !== id))
  }
  const editItem = (id) =>{
    const specificItem = list.find((item)=> item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list))
  },[list])
  return (
  
      <section className='max-w-[400px] mx-auto shadow-md mt-[90px] bg-slate-100 rounded-md px-10'>
      <div className='flex flex-col gap-4 justify-between items-center'>
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {... alert} removeAlert={showAlert} list={list}/>}
          <h2 className='font-bold my-4'>Grocery Bud</h2>
          <div className='pb-4'>
            <input type='text' placeholder='e.g. eggs' value={name} onChange={(e)=>setName(e.target.value)}  className='outline-none'/>
            <button type='submit' className='bg-blue-400 px-4 transiton duration-300 ease-in-out  hover:scale-105' >
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {
          list.length > 0 && (
            <div className='items-center text-center'>
            <List items={list } removeItem={removeItem} editItem={editItem}/>
            <button onClick={clearList} className='text-red-600 font-bold transition duration-300 ease-in-out hover:scale-105'>Clear Item</button>
            </div>
          )
        }
        </div>
      
      </section>
      
  )
}

export default App;
