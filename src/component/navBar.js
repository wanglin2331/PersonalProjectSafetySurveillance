import React, { Component } from 'react';
import './navBar.css';
import logo from '../HCLogo.jpg';
import appTitle from '../apptitle.svg';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {logout} from "../redux/reducers/triggers";


class NavBar extends Component {

    logout() {
        this.props.logout();
    };

    render() {
        // console.log('navvvvvvvvpathhhhhh',this.props.bar)
        return (
            <div className='Nav-top'>
                <header className="Nav-bar">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={appTitle} className="App-title" alt="title" />
                    <p className={this.props.bar==='/triggers'?'NavActive':"Nav-tabs"}>Triggers</p>
                    <p className={this.props.bar==='/triggerdetail/:triggersourcedataid'?'NavActive':this.props.bar==='/encounter'?'NavActive':"Nav-tabs"}>Chart Review</p>
                    <p className="Nav-tabs">Adverse Events</p>  
                </header>

                <p className='Logout'> {this.props.username} <Link to={"/"}><button onClick={()=>this.logout()}>Sign out</button></Link> </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.triggers.username
    }
}

export default connect( mapStateToProps, {logout: logout} )(NavBar);