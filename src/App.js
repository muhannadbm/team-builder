import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Components/Form'


function App() {
  const initialvalues= {name: '', email: '', role: ''}
  const [formvalues,setFormvalues] = useState(initialvalues)
  const [teamlist, setTeamlist] = useState([]);
  
  function submit(e){
    e.preventDefault()
   setTeamlist([formvalues, ...teamlist])
   setFormvalues(initialvalues)
  }

  function change(evt){
    setFormvalues({...formvalues, [evt.target.name]: evt.target.value})
  }

  function Editmemeber(obj){
    const {name,email,role} = formvalues
    let newobj = {name: name, email: email, role: role}
    console.log(obj)
    // let tempindex = teamlist.indexOf(el => el.name === obj.name )
    let temparr = teamlist.map(el => {
      if(el === obj){
        return newobj 
      }
      else{
        return el
      }
    })
    setTeamlist(temparr)
  }



  return (
    <div className="App">
      <div className="container">
         <Form value={formvalues} submit={submit} change = {change} /> 
        {teamlist.map(el => {
          return (
          <div key={el.name} className="member">
          <p>{el.name}</p>
          <p>{el.email}</p>
          <p>{el.role}</p>
          <button onClick= {()=> Editmemeber(el)}>Edit</button>
        </div>)

        })}
       
      </div>
    </div>
  );
}

export default App;
