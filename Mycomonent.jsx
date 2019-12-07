import React, { Component } from 'react'
import MyTable from './MyTable'
class Mycomonent extends Component {
    state={
        Persons:[
            {name:"Ahmed",email:"7/12/2019"}
        ]
    }
    submitHandler= (event)=>{
        event.preventDefault()
        let newPersons = []
        let found=false
        let name = document.querySelector("#name").value
        let email =document.querySelector("#email").value
        for(let i=0;i<this.state.Persons.length;i++){
            if(this.state.Persons[i].name!==name)
            {
                newPersons.push(this.state.Persons[i])
            }
            else
            {
                found=true
                newPersons.push({name:name,email:email})
            }
            
        }
        if(!found)
        newPersons.push({name:name,email:email})
        this.setState(
            {
                Persons:newPersons
            }
        )
    }
    editElement= (e) =>{
        let index = parseInt(e.target.id)
        //let newPersons = []
        for(let i=0;i<this.state.Persons.length;i++)
        {
            if(i===index)
            {
                document.querySelector("#name").value=this.state.Persons[i].name
                document.querySelector("#email").value=this.state.Persons[i].email
            }
        }
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" id="name" placeholder="Task"/>
                    <input type="date" name="email" id="email" placeholder="Date"/>
                    <button type="submit">Submit</button>
                </form>
                <MyTable persons={this.state.Persons} editElement={this.editElement}/>
            </div>
        )
    }
}
export default Mycomonent
