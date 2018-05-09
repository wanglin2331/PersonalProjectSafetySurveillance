import React, { Component } from 'react';
import './triggerDetail.css';
import { connect } from "react-redux";
import {getUserInfo} from "../redux/reducers/triggers";
import {getTrigger, getComments} from "../redux/reducers/triggerDetail";
import {Link} from 'react-router-dom';

import NavBar from './navBar';
import StatusBar from './AE/statusBar';
import AEYes from './AE/AEYes';
import AENo from './AE/AENo';
import AETBD from './AE/AETBD';

import Detail from './DetailAndComment/Detail';
import Comment from './DetailAndComment/Comment';

class TriggerDetail extends Component {
    constructor() {
        super();
    
        this.state = {
          detailCommentToggle: 'detail'
        };

    }

    componentWillMount() {
        console.log(this.props.match.path);
        this.props.getUserInfo();
        this.props.getTrigger(this.props.selectedTriggerSourceDataID);
        this.props.getComments(this.props.selectedTriggerSourceDataID)
    };

    render() {
        return (
            <div className="App">
                <div className='body'>
                    <NavBar bar={this.props.match.path}/>
                    
                    <div className='AETriggerNMBar'> <Link to={"/triggers"} className='BackArrow'>&#60;</Link> <div className="vl"></div> Trigger: {this.props.triggernm}</div>
                    
                    <StatusBar/>

                    <div className="AEContent">
                            <div className='AEDetail'>
                                {this.props.aeflg ==='Y' 
                                ?   <AEYes/>
                                
                                : this.props.aeflg === 'N'
                                    ?   <AENo/>
                                    
                                    :   <AETBD/>
                                }
                            </div>
                            
                            <div className='DorC'>
                                <div className='selectDorC'>
                                    <h4 className={this.state.detailCommentToggle==='detail'? 'Active' : 'Inactive'} 
                                        onClick={()=>this.setState({detailCommentToggle: 'detail'})}>Detail</h4>
                                    <h4 className={this.state.detailCommentToggle==='comment'? 'Active' : 'Inactive'} 
                                        onClick={()=>this.setState({detailCommentToggle: 'comment'})}>Comment</h4>    
                                </div>
                                <div>
                                    {this.state.detailCommentToggle==='detail'
                                    ?   <Detail/>
                                    :   <Comment/>
                                    }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedTriggerSourceDataID: state.triggerDetail.selectedTriggerSourceDataID,
        triggernm: state.triggerDetail.triggernm,
        aeflg: state.triggerDetail.aeflg
    }
}

export default connect ( mapStateToProps, {getUserInfo: getUserInfo, getTrigger:getTrigger, getComments: getComments})(TriggerDetail);