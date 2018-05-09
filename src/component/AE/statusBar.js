import React, { Component } from 'react';
import './statusBar.css';
import { connect } from "react-redux";
import {updateTriggerStatus, updateTriggerUsername} from "../../redux/reducers/triggerDetail";


class StatusBar extends Component {

    render() {
        return (
            <div className='AEStatusBar'>
                    <div>
                       
                        Status: 
                        <select className='StatusSelect'
                                defaultValue={  this.props.triggerstatus==='Not Reviewed'
                                                ?'Set Status...'
                                                :this.props.triggerstatus}
                                onChange={ (e) => this.props.updateTriggerStatus(e.target.value,this.props.triggersourcedataid) }>
                            <option disabled hidden>{this.props.triggerstatus==='Not Reviewed'
                                                                        ?'Set Status...'
                                                                        :this.props.triggerstatus}</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Referred to Regulatory">Referred to Regulatory</option>
                            <option value="Referred to Risk Management">Referred to Risk Management</option>
                            <option value="Referred to Pharmacy">Referred to Pharmacy</option>
                            <option value="Completed">Completed</option>
                        </select>
                        
                        Assign To:
                        <select className='AssignSelect'
                                defaultValue={  this.props.triggerusername
                                                ?this.props.triggerusername
                                                :'Assign to...'}
                                onChange={ (e) => this.props.updateTriggerUsername(e.target.value, this.props.triggersourcedataid)}>
                            <option disabled hidden>{this.props.triggerusername
                                                                        ?this.props.triggerusername
                                                                        :'Assign to...'}</option>
                            <option value="lin.wang">lin.wang</option>
                            <option value="valere.lemon">valere.lemon</option>
                            <option value="alejo.jumat">alejo.jumat</option>
                            <option value="stanley.pestotnik">stanley.pestotnik</option>
                            <option value="robert.jorgensen">robert.jorgensen</option>
                            <option value="taylor.waldron">taylor.waldron</option>
                        </select>
                    </div>
                    
                    <button>Watch</button>

                     {/* <button onClick={()=>this.props.getUserAssigned(this.props.selectedTriggerSourceDataID)}></button> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedTriggerSourceDataID: state.triggerDetail.selectedTriggerSourceDataID,
        username: state.triggers.username,
        triggerusername: state.triggerDetail.triggerusername,
        triggerstatus: state.triggerDetail.triggerstatus,
        triggersourcedataid: state.triggerDetail.triggersourcedataid,
        yourTriggers: state.triggers.yourTriggers
    }
}

export default connect( mapStateToProps, { updateTriggerStatus: updateTriggerStatus, updateTriggerUsername:updateTriggerUsername} )(StatusBar);