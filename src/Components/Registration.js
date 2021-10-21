import React, { Component } from 'react'
import { Grid, Button, InputAdornment, FormHelperText } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { AccountCircle, LockRounded} from '@mui/icons-material'

import {Route,Redirect} from'react-router-dom';

const regForName=RegExp(/^[a-zA-Z]{3,100}$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPass=RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
const isAuth =false;

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            dataVal:{ 
                fname:null,
                lname:null,
                uname:null,
                email:null,
                password:null,
                confirm:null
            },
           errors:{
                fname:'',
                lname:'',
                uname:'',
                email:'',
                password:'',
                confirm:''  
            },
            formData:[],
            UserData:[]
        }
    }
    // handling input fields
    handler=(event)=>{
        const{name,value}=event.target;
        let errors=this.state.errors;
        let fetchVal = this.state.dataVal;
        console.log(fetchVal)
        switch(name){  
            case 'fname':
                errors.fname=regForName.test(value)?'':'Name should be in aplahbets';
                fetchVal.fname = value;
                break;
            case 'lname':
                errors.lname=regForName.test(value)?'':'Last Name should be in aplahbets';
                fetchVal.lname = value;
                break;    
            case 'uname':
                errors.uname=regForName.test(value)?'':'userName should be in aplahbets';
                fetchVal.uname = value;
                break;      
            case 'email':
                errors.email=regForEmail.test(value)? '':'Email is not valid';
                fetchVal.email = value;
                break; 
            case 'password':
                errors.password=regForPass.test(value)? '':'password should be in aplhanumeric & special chars';
                fetchVal.password = value;
                // this.state.password=value;
                break;
            case 'confirm':
                errors.confirm=value === this.state.password?'': 'password should not matched';
                fetchVal.confirm = value;
                break;
            default:
                break;
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }

        //Registration form submit functionality

        formSubmit=(event)=>{
            event.preventDefault();
            let items = this.state.dataVal;
            console.log(items)
           
           if(this.validate(this.state.errors))
            {
                alert("Registration Succesfull, Pls click on login to continue");
                this.setState({
                    formData : [...this.state.formData,
                        {"fname":items.fname,
                        "lname":items.lname,
                        "uname":items.uname,
                        "email":items.email,
                        "password":items.password
                      }]
                    });  

                    //updating user data on server

                    fetch("http://localhost:3001/Users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.state.dataVal)
                    })
                    .then(
                    this.setState({
                        formData:[] 
                    })
                    );

                    document.getElementById('fname').value='';  
                    document.getElementById('lname').value='';   
                    document.getElementById('uname').value='';        
                    document.getElementById('email').value='';

                    document.getElementById('password').value='';
                    document.getElementById('confirm').value='';
          
                }            
                else {
                   alert("Invalid Form");
                   document.getElementById('fname').value='';
                   document.getElementById('lname').value='';   
                   document.getElementById('uname').value='';          
                   document.getElementById('email').value='';
                
                   document.getElementById('password').value='';
                   document.getElementById('confirm').value='';
                
                }
            }
        
        validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }

    render() {
        const {errors}=this.state;        
        return (
            <div>
                <Route exact path="/registration">
                {this.isAuth? <Redirect to="/" /> :
                <Grid container style={{minHeight: "100vh"}}>
                    <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding:20}}>
                        
                        <div style={{display:"flex" , flexDirection:"column", width:300}}>
                            {/* Registration Form Starts */}
                            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}} >
                                <img src="./Images/register.jpg" width={300} alt="avtar"/>

                                <FormControl className="mb-3" >
                                    <Input type="text" placeholder="Enter Name" name="fname" id="fname"
                                    startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>} onChange={this.handler} required/><br/>
                                    {errors.fname.length>0 && 
                                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.fname}</FormHelperText>}
                                </FormControl><br/>

                                <FormControl className="mb-3" >
                                    <Input type="text" placeholder="Enter Last Name" name="lname" id="lname"
                                    startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>} onChange={this.handler} required/><br/>
                                    {errors.lname.length>0 && 
                                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.lname}</FormHelperText>}
                                </FormControl><br/>

                                <FormControl className="mb-3" >
                                    <Input type="text" placeholder="Enter Username" name="uname" id="uname"
                                    startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>} onChange={this.handler} required/><br/>
                                    {errors.uname.length>0 && 
                                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.uname}</FormHelperText>}
                                </FormControl><br/>

                                <FormControl className="mb-3" >
                                    <Input type="email" placeholder="Enter Email" name="email" id="email"
                                    startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>} onChange={this.handler} required/><br/>
                                    {errors.email.length>0 && 
                                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.email}</FormHelperText>}
                                </FormControl><br/>

                                <FormControl className="mb-3" >
                                    <Input type="password" placeholder="Enter Password" name="password" id="password" 
                                    startAdornment={<InputAdornment position="start"><LockRounded /></InputAdornment>} onChange={this.handler} required /><br/>
                                    {errors.password.length>0 && 
                                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.password}</FormHelperText>}
                                </FormControl><br/>

                                <FormControl className="mb-3" >
                                    <Input type="password" placeholder="Enter Confirm Password" name="confirm" id="confirm" 
                                    startAdornment={<InputAdornment position="start"><LockRounded /></InputAdornment>} onChange={this.handler} required /><br/>
                                    {errors.confirm.length>0 && 
                                    <FormHelperText style={{color:'red',fontWeight:"bold"}}>{errors.confirm}</FormHelperText>}
                                </FormControl><br/>

                                {/* <FormControl>
                                    <FormControlLabel control={<Checkbox  onChange={this.showPassword}/>} label="Show Password" />
                                </FormControl><br/> */}

                                <Button variant="contained" href="#" type="submit" color="success" onClick={this.formSubmit}> Register</Button>
                                <br/><br/><hr/>
                                <FormControl>
                                    <p>Have an account ?&nbsp;&nbsp;
                                        <Button href="/" variant="outlined" background="primary.main">Login</Button> 
                                    </p>
                                </FormControl>
                            </Box>
                            {/* Registration Form Ends */}
                        </div>   
                    </Grid>
                    {/* Image for Registration form */}
                    <Grid item xs={12} sm={6}>
                        <img src="./Images/registKey.jpg" 
                        style={{width:"100%", height:"100%", objectFit:"cover"}} alt="login" />
                    </Grid>
                </Grid>}
                </Route>
            </div>
        )
    }
}

export default Login
