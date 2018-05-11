import React, { Component } from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {login} from "../redux/reducers/triggers";


class Login extends Component {
    constructor() {
        super();
    
        this.state = {
          username: '',
          password: ''
        }
    };

    handleChangeUsername( val ) {
        this.setState({username: val });
        };
    
    handleChangePassword( val ) {
        this.setState({password: val });
        };

    login() {
        const { username, password } = this.state;
        this.props.login({ username, password });
    };

    render() {
        return (
            <div className="App">
                <div className="body">
                    <div className="login">
                        Username
                        <input onChange={ (e) => this.handleChangeUsername(e.target.value) }></input>
                        Password
                        <input id="PasswordInput" onChange={ (e) => this.handleChangePassword(e.target.value) }></input>
                        
                        <div>
                            <Link to={"/triggers"}><button onClick={()=>this.login()}>Login</button></Link> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       username : state.triggers.username,
       loginStatus: state.triggers.loginStatus
    }
}

export default connect( mapStateToProps, {login: login})(Login);