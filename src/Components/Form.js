import React from "react";
export default function Form(props) {
const {name,email,role} = props.value
const {submit,change} = props

return(
<div className="form">
<form onSubmit={submit}>
    <label htmlFor="name">Name:
    <input id="name" type="text" value={name} name='name' onChange={change}/> 
    </label>
    <label htmlFor="email">Email:
    <input id="email" type="text" value={email} name='email' onChange={change}/>
    </label>
    <label htmlFor="role">Role:
    <select id="role" value={role} name='role' onChange={change}>
        <option value="">Choose a Role</option>
        <option value ="Leader">Leader</option>
        <option value ="Senior">Senior</option>
        <option value ="Junior">Junior</option>
        <option value ="Intern">Intern</option>
    </select>
    </label>
    <button>Submit</button>
</form>
</div>)
}