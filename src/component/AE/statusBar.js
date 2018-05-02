import React, { Component } from 'react';
import './statusBar.css';
import { connect } from "react-redux";
import {updateTriggerStatus} from "../../redux/reducers/triggerDetail";


class StatusBar extends Component {

    render() {
        return (
            <div className='AEStatusBar'>
                    <div>
                        Status: 
                        <select className='StatusSelect' onChange={ (e) => this.props.updateTriggerStatus(e.target.value,this.props.triggersourcedataid) }>
                            <option value="" selected disabled hidden>{this.props.triggerstatus==='Not Reviewed'
                                                                        ?'Set Status...'
                                                                        :this.props.triggerstatus}</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Referred to Regulatory">Referred to Regulatory</option>
                            <option value="Referred to Risk Management">Referred to Risk Management</option>
                            <option value="Referred to Pharmacy">Referred to Pharmacy</option>
                            <option value="Completed">Completed</option>
                        </select>
                        
                        Assign To:
                        <select className='AssignSelect'>
                            <option value="lin.wang">lin.wang</option>
                            <option value="valere.lemon">valere.lemon</option>
                        </select>
                    </div>
                    
                    <button>Watch</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        triggerstatus: state.triggerDetail.triggerstatus,
        triggersourcedataid: state.triggerDetail.triggersourcedataid
    }
}

export default connect( mapStateToProps, { updateTriggerStatus: updateTriggerStatus} )(StatusBar);