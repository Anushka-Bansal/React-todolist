import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemname :"",
            itemdesc:"",
            tasks:[]
        };
    }
    // handling priority input field
    handleItem=(e)=>{
        console.log(e.target.value);
        this.setState({
            itemname: e.target.value
        })
    }
    //handing add task input field
    handleDesc=(e)=>{
        console.log(e.target.value);
        this.setState({
            itemdesc: e.target.value
        })
    }
    // Add Task Functionality
    Add =(e)=>{
        e.preventDefault();
        if(this.state.itemname === "" && this.state.itemdesc === ""){
            alert("All fields are mandatory")
            return;
        }
        this.props.addtodo(this.state);
        // rendering task in local storage
        const task = this.state.itemdesc
        this.setState({

            tasks : [...this.state.tasks,
                {
                    task
                }]
        })
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks))

        document.getElementById('name').value="";
        document.getElementById('desc').value="";
    }

    render() {
        return (
            <div className="container bg-dark mt-150">
                <h2 className="text-center text-warning">ADD Task</h2>
                <div className="row justify-content-center align-items-center h-200">
                    <div className=" col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        {/* Add Task/Todo Form */}
                        <div className="pt-5 mb-5">
                            <div className="form-group">
                                <label className="text-info">Priority :</label>&nbsp;&nbsp;
                                <input type="number" id="name" name="name" max="5" min="1" placeholder=" Enter Priority of task" onChange={this.handleItem}></input>
                            </div>
                            <div className="form-group">
                                <label className="text-info">Add Task :</label>
                                <textarea className="form-control" id="desc" placeholder="Add Task" rows="3" onChange={this.handleDesc}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.Add}>Add Todo</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo
