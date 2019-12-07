/* import React, { Component } from 'react'
import MyTable from './MyTable'
export default class Mycomonent extends Component {
    state={
        Persons:[
            {name:"Ahmed",email:"a@gmail.com",phone:"7711"}
        ]
    }

    submitHandler= (event)=>{
        event.preventDefault()
        this.setState(
            {
                Persons:[...this.state.Persons,{
                    name:document.querySelector("#name").value,
                    email:document.querySelector("#email").value,
                    phone:document.querySelector("#phone").value
                }]
            }
        )
    }

    deleteElement= (e) =>{
        let index = parseInt(e.target.id)
        let newPersons = []
        for(let i=0;i<this.state.Persons.length;i++)
        {
            if(i!==index)
            newPersons.push(this.state.Persons[i])
        }
        this.setState(
            {
                Persons:newPersons
            }
        )
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="text" name="phone" id="phone" placeholder="phone"/>
                    <button type="submit">Submit</button>
                </form>
                <MyTable persons={this.state.Persons} deleteElement={this.deleteElement}/>
            </div>
        )
    }
}

//export default Mycomonent */

import React, { Component } from 'react'
import MyTable from './MyTable'
export default class Mycomonent extends Component {
    state={
        id:-1,
        Persons:[
            {name:"Ahmed",email:"a@gmail.com"}
        ]
    }

    
    editHandler = (e) =>{
        e.preventDefault()
        let index = this.state.id
        let newPersons = []
        let found = false
        let name = document.querySelector("#name").value
        let email =document.querySelector("#email").value
        for(let i=0;i<this.state.Persons.length;i++)
        {
            if(i!==index)
            newPersons.push(this.state.Persons[i])
            else
            {
                found = true
                newPersons.push({name:name,email:email})
            }
        }
        if(!found)
        newPersons.push({name:name,email:email})
        this.setState(
            {
                id:-1,
                Persons:newPersons
            }
        )
        document.querySelector("#name").value=""
        document.querySelector("#email").value=""

    }
    submitHandler= (event)=>{
        event.preventDefault()
        this.setState(
            {
                id:-1,
                Persons:[...this.state.Persons,{
                    name:document.querySelector("#name").value,
                    email:document.querySelector("#email").value
                }]
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
        this.setState(
            {
                id:index
            }
        )
        
    }
    cancelHandler = ()=>{
        this.setState(
            {
                id:-1
            }
        )
        document.querySelector("#name").value=""
        document.querySelector("#email").value=""
    }
    render() {
        if(this.state.id===-1)
        {
            return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="name" id="name" placeholder="Name"/>
                        <input type="date" name="email" id="email" placeholder=""/>
                        <button type="submit">Add</button>
                    </form>
                    <MyTable persons={this.state.Persons} editElement={this.editElement}/>
                </div>
            )
        }
        else{
            return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="name" id="name" placeholder="Task"/>
                        <input type="date" name="email" id="email" placeholder=""/>
                        <button onClick={this.editHandler}>Edit</button>
                        <button onClick={this.cancelHandler}>Cancel</button>
                    </form>
                    <MyTable persons={this.state.Persons} editElement={this.editElement}/>
                </div>
            )
        }
        
    }
}

//export default Mycomonent
