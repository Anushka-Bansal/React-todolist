import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemname :"",
            itemdesc:""
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
        document.getElementById('name').value="";
        document.getElementById('desc').value="";
    }

    render() {
        return (
            <div className="container bg-dark mt-150">
                <h2 className="text-center text-warning">ADD Task</h2>
                <div className="row justify-content-center align-items-center h-200">
                    <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        {/* Add Task/Todo Form */}
                        <div className="pt-5 mb-5">
                            <div className="form-group">
                                <label className="text-info">Priority :</label><br/>
                                <input type="number" id="name" name="name" placeholder=" Enter Priority of task" onChange={this.handleItem}></input>
                            </div>
                            <div className="form-group">
                                <label className="text-info">Add Task :</label><br/>
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
