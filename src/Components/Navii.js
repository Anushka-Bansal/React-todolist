import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { AppBar,Toolbar,IconButton,Typography, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export class Navii extends Component {
    //Logout button functionality
    logout = ()=> {
        console.log("logging out")
        this.setState({isAuth: false})
        localStorage.clear();
    }

    render() {  
       const email = localStorage.getItem("email");
        return (
           <> 
            <Box component="main" sx={{ display: 'flex' }}>
                <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                <IconButton  size="small" sx={{ ml:2}}>
                    <Avatar sx={{ width: 150, height: 150 }}><img src="./Images/list.jpg" alt="userimage" /></Avatar>
                </IconButton>
                <Typography 
                // variant='h4'
                //  sx={{marginLeft:"400px"}}
                  href="/dashboard">
                   <h1> Lots of work to do ?</h1>
                    <h3>Lets make a Todo List</h3>
                </Typography>

                <Typography 
                // variant='h4'
                 sx={{marginLeft:"450px"}}
                  href="/dashboard">
                   <h1> WELCOME</h1>
                    <h3>{email}</h3>
                    {/* <Button variant="contained" color="success">Your Tasks</Button> &nbsp;&nbsp; */}
                    <Button  href="/" variant="contained" color="error" onClick={this.logout}>Logout</Button> <br/>
                </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
   
              
           </>
        )
    }
}

export default Navii