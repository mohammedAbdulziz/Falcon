
// // class App extends Component {
// //   render() {
// //     return (
// //       <div >
// //       <Messeage />
// //        </div>
// //     )
// //   }
// // }
// // export default App;
// import React, { Component } from 'react';
// import './App.css';
// import Table from './Table';
// import Form from './Form';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       username: '',
//       password: '',
//       address:'',
//       items: []
//     }
//   };

//   handleFormSubmit = (e) => {
//     e.preventDefault();

//     let items = [...this.state.items];

//     items.push({
//       username: this.state.username,
//       password: this.state.password,
//       address:this.state.address
//     });
//     this.setState({
//       items,
//       username: '',
//       password: '',
//       address:''
//     });
//   };

//   handleInputChange = (e) => {
//     let input = e.target;
//     let name = e.target.name;
//     let value = input.value;

//     this.setState({
//       [name]: value
//     })
//   };
//  remove=(items)=>{let deleteItem=this.state.items.map(e=>e.name!==items.name);
// this.setState({items:deleteItem})
// };
//   render() {
//     return (
//       <div className="App">
//         <Table items={ this.state.items }/>
//         <Form handleFormSubmit={ this.handleFormSubmit } 
//           handleInputChange={ this.handleInputChange }
//           newUsername={ this.state.username }
//           newPassword={ this.state.password }
//           newAddress={this.state.addrss} />
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react';
import './App.css';
import './Mycomonent'
import Mycomonent from './Mycomonent';
function App() {
  return (
    <div className="App">
      <Mycomonent/>
    </div>
  );
}
export default App;