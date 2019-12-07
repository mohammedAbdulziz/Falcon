/* import React from 'react';

const MyTable = (props)=>{
    return(
        <div className="myTable">
            <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>phone</th>
                            <th>X</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.persons.map((element,index) => (
                            <tr>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                                <td><button className="delBtn" id={index} onClick={props.deleteElement}>X</button></td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    )
}

export default MyTable */
import React from 'react';

const MyTable = (props)=>{
    return(
        <div className="myTable">
            <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.persons.map((element,index) => (
                            <tr>
                                <td>{element.name}</td>
                                <td><button className="delBtn" id={index} onClick={props.editElement}>Edit</button></td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    )
}

export default MyTable