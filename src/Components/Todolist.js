import React, { Component } from 'react'
import AddTodo from './AddTodo';
import Todo from './Todo';

export class Todolist extends Component {
    constructor(props){
    super(props);
    this.state={
        addTodo: '',
        todos : [
            {
                id:"1",
                name:"1",
                desc:"used to play cricket"
            },
            {
                id:"2",
                name:"2",
                desc:"used to play cricket"
            }
        ]}
    }
    // Add New Task functionality
    addNewTask =(task)=>{
        console.log("mytask",task);
        const todos =[...this.state.todos]
        todos.push(
            {
                id:Math.random(),
                name: task.itemname,
                desc : task.itemdesc
            }
        )
        this.setState({addTodo:"",todos})
    }

    //Delete Task Functionality
    deleteTask = (id)=>{
        console.log(id);
        const todos =this.state.todos.filter(task => {return task.id!==id})
        this.setState({todos})
        console.log(todos)
    }
    render() {
        return (
            <div className="container bg-dark m-8 ">
                <AddTodo addtodo = {this.addNewTask} />
                <div className="text-center text-light">
                    <h3>Task LIST</h3>
                </div>
                <div> 
                    {/* table rendering all the added task with actions */}
                    <table className="table table-hover mb-4">
                        <thead className="table-success">
                            <tr>
                            <th>S No.</th>
                            <th>Priority</th>
                            <th>Add Task</th>
                            <th colSpan="2" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            {
                                this.state.todos.map((todo, index) =>
                                    <tr key={todo.id}>
                                        <th>{index+1}</th>
                                        {/* rendering todo component */}
                                        <Todo todo={todo} delete={this.deleteTask}/>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Todolist
