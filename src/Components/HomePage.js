import React, { Component } from 'react'
import Navii from './Navii'
import Todolist from './Todolist'

export class HomePage extends Component {
    render() {
        return (
            <div>
                {/* importing Navbar */}
                <Navii />
                <div  style={{visibility:"hidden"}}>
                    Hello Todo List
                </div>
                {/* importing Todolist */}
                <Todolist />{/* Todolist is a combination of AddTodo and Todo Component*/}
            </div>
        )
    }
}

export default HomePage
