import { Button } from '@mui/material';
import React, { Component } from 'react';

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             completed:false,
        }
    }
    // strike(line through) through functionality on edit button
    editData =()=>{
        // this.setState({
        //     completed:1,
        // })
        this.setState(prevState => ({
            completed: !prevState.completed
          }));
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                {this.children}
                <td style={ this.state.completed ? { textDecoration:'line-through'} : {}}>{this.props.todo.name}</td>
                <td style={ this.state.completed ? { textDecoration:'line-through'} : {}}>{this.props.todo.desc}</td>
                <td><Button type="button" variant="contained" color="success" onClick={this.editData}><i className="fa fa-edit"></i></Button></td>
                <td><Button type="button" variant="contained" color="error"  onClick={()=>this.props.delete(this.props.todo.id)}><i className="fa fa-trash-o"></i></Button></td>
            </React.Fragment>
        )
    }
}

export default Todo
