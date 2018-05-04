import React, { Component } from 'react';
import './triggers.css';
import statusimg from './status.png';
import statusdoneimg from './statusdone.png';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {getUserInfo} from "../redux/reducers/user";
import {getTriggers, selectMyTriggers} from "../redux/reducers/triggers";
import {selectTrigger} from "../redux/reducers/triggerDetail";
import {selectEncounter, selectMRN} from "../redux/reducers/encounter";

import NavBar from './navBar';

class Triggers extends Component {
    constructor() {
        super();
    
        this.state = {
          triggersToDisplay: [],
          myTriggers: 'N'
        };

    }

    componentWillMount() {
        this.props.getUserInfo();
        this.props.getTriggers();
        console.log(this.props.match.path);
        console.log(this.props.match.path);
    };

    componentWillReceiveProps = (props) => {
        this.setState({ triggersToDisplay: props.allTriggers});
        this.props.getUserInfo();
    };

    selectEncounterandMRN= (encounterid, MRN) => {
        this.props.selectEncounter(encounterid);
        this.props.selectMRN(MRN);
    };

    checkAssignToMe() {
        this.setState({myTriggers: 'Y'});
        this.props.selectMyTriggers();
    };

    uncheckAssignToMe(){
        this.setState({myTriggers: 'N'});
        this.props.getTriggers();
    }

    render() {
        return (
        <div className="App">
            {this.props.loginStatus==='Success'
            ?
                <div className='body'>
                    <NavBar bar={this.props.match.path}/>

                    <div className="HospitalInfoBar">
                        <div className='Healthsystem'>
                            Healthcare System:
                            <div className='Hospitalsystem'>
                                Risk Hospital
                            </div>
                        </div>



                        <div className="TriggercheckBox">
                            <input type="checkbox" onClick={()=>{this.state.myTriggers==='N'?this.checkAssignToMe():this.uncheckAssignToMe()}}></input>Assigned To Me
                            <input type="checkbox"></input>Trigger Events I'm Watching
                        </div>
                    </div>

                    <div className='VolumnTitle'>Number of Patients with Positive Triggers:</div>
                    <div className="TriggerVolumnBar">
                        <div className='TriggerVolumncontent'>
                            <li className={this.state.triggersToDisplay===this.props.allTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={() => this.setState({ triggersToDisplay: this.props.allTriggers })}> <div className='VolumnNum'> {this.props.allTriggers.length}</div> <div className='VolumnNM'> All</div></li>
                            <li className={this.state.triggersToDisplay===this.props.coagulationTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.coagulationTriggers })}> <div className='VolumnNum'> {this.props.coagulationTriggers.length} </div> <div className='VolumnNM'> Coagulation</div></li>
                            <li className={this.state.triggersToDisplay===this.props.glycemicTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.glycemicTriggers })}> <div className='VolumnNum'> {this.props.glycemicTriggers.length} </div> <div className='VolumnNM'> Glycemic</div></li>
                            <li className={this.state.triggersToDisplay===this.props.infectionsTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.infectionsTriggers })}> <div className='VolumnNum'>  {this.props.infectionsTriggers.length} </div> <div className='VolumnNM'> Healthcare Associated Infections</div></li>
                            <li className={this.state.triggersToDisplay===this.props.medicationTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.medicationTriggers })}> <div className='VolumnNum'> {this.props.medicationTriggers.length}</div> <div className='VolumnNM'>  Medication Reversal</div></li>
                            <li className={this.state.triggersToDisplay===this.props.painTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.painTriggers })}> <div className='VolumnNum'> {this.props.painTriggers.length} </div> <div className='VolumnNM'> Pain Management</div></li>
                            <li className={this.state.triggersToDisplay===this.props.patientCareTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.patientCareTriggers })}> <div className='VolumnNum'> {this.props.patientCareTriggers.length} </div> <div className='VolumnNM'> Patient Care</div></li>
                            <li className={this.state.triggersToDisplay===this.props.pediatricTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.pediatricTriggers })}> <div className='VolumnNum'> {this.props.pediatricTriggers.length} </div> <div className='VolumnNM'> Pediatric</div></li>
                            <li className={this.state.triggersToDisplay===this.props.perinatalTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.perinatalTriggers })}> <div className='VolumnNum'> {this.props.perinatalTriggers.length} </div> <div className='VolumnNM'> Perinatal</div></li>
                            <li className={this.state.triggersToDisplay===this.props.readmissionTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.readmissionTriggers })}><div className='VolumnNum'>  {this.props.readmissionTriggers.length} </div> <div className='VolumnNM'> Readmission</div></li>
                            <li className={this.state.triggersToDisplay===this.props.renalInjuryTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.renalInjuryTriggers })}> <div className='VolumnNum'> {this.props.renalInjuryTriggers.length} </div> <div className='VolumnNM'> Renal Injury</div></li>
                            <li className={this.state.triggersToDisplay===this.props.surgicalTriggers ?'TriggerCatgoryActive' : 'TriggerCatgoryInactive'} onClick={()=>this.setState({triggersToDisplay: this.props.surgicalTriggers })}> <div className='VolumnNum'> {this.props.surgicalTriggers.length} </div> <div className='VolumnNM'> Surgical</div></li>                   
                        </div>
                    </div>

                    <table className='TriggersTableHeader'> 
                        <tbody>
                                <tr className='TableColumnHeader'>
                                    <th id='TriggersStatus'>Status</th>
                                    <th id='TriggersPatient'>Patient</th>
                                    <th id='TriggersPositiveTrigger'>Positive Trigger</th>
                                    <th id='TriggersEvent'>Triggering Event</th>
                                    <th id='TriggersDTS'>Trigger Date/Time</th>
                                    <th id='TriggersUnit'>Unit</th>
                                    <th id='TriggersLOS'>LOS</th>
                                    <th id='TriggersAE'>Adverse Event</th>

                                </tr>
                        </tbody>    
                    </table>   

                    <table className='TriggersTable'> 
                        <tbody>            
                                    {this.state.triggersToDisplay.map((trigger) => {

                                        return (
                                            <tr className='Tabledata'>
                                                <td id='TriggersStatus' className='TriggerStatus'>{trigger.triggerstatus==='Not Reviewed'
                                                        ?<img src={statusimg} className="Status-Img" alt="status" />
                                                        :<img src={statusdoneimg} className="StatusDone-Img" alt="status" />}
                                                    {trigger.triggerstatus}</td>
                                                
                                                <td id='TriggersPatient' onClick={()=>this.selectEncounterandMRN(trigger.triggerencounterid, trigger.mrn)}>
                                                    <Link to={"/encounter"}> {trigger.patientlastnm+', '+trigger.patientfirstnm}</Link>
                                                    <div>{'Visit#: '+trigger.triggerencounterid}</div>
                                                </td>
                                                <td id='TriggersPositiveTrigger' onClick={()=>this.props.selectTrigger(trigger.triggersourcedataid)}>
                                                    <Link to={"/triggerdetail/"+trigger.triggersourcedataid}>{trigger.triggernm}</Link>
                                                </td>
                                                <td id='TriggersEvent'><b>{trigger.triggerdsc} {trigger.triggervaluedsc+' '+trigger.triggerunitdsc}</b></td>
                                                <td id='TriggersDTS'>{trigger.triggerdts.substr(0, 10)+ ' '+ trigger.triggerdts.substr(11, 5)}</td>
                                                <td id='TriggersUnit'>{trigger.triggerunitnm}</td>
                                                <td id='TriggersLOS'>{trigger.los}</td>
                                                <td id='TriggersAE'><div className={trigger.aeflg==='Y'?'AEY':(trigger.aeflg==='N'?'AEN':'')}>{trigger.aeflg ?(trigger.aeflg==='Y'?'Yes':'No'):'--'}</div></td>
                                            </tr>
                                        )
                                    })}
                        </tbody>    
                    </table>    
                    <p className='FootNotes'>© Health Catalyst, Inc.  All Rights Reserved</p>
                    <p className='FootNotes'>CONFIDENTIAL:  Patient Safety Work Product.  Protected under the Patient Safety Quality Improvement Act.</p>
                    <p className='FootNotes'>Do not disclose unless authorized by Health Catalyst Patient Safety Organization #54375876</p>           
                </div>


                :
                <div className='body'>
                    {this.props.loginStatus==='Pending'
                        ?
                        <h2>Loading...</h2>
                        :
                        <div className='LoginFail'>
                            <h2>Invalid username or password!!!</h2>
                            <Link to={"/"}><button>Login Again</button></Link>
                        </div>
                    }
                </div>
            }
        </div>
        )
    }
};
 
const mapStateToProps = state => {
    return {
        username:           state.user.username,
        loginStatus:        state.user.loginStatus,
        allTriggers:        state.triggers.allTriggers,
        coagulationTriggers:state.triggers.coagulationTriggers,
        glycemicTriggers:   state.triggers.glycemicTriggers,
        infectionsTriggers: state.triggers.infectionsTriggers,
        medicationTriggers: state.triggers.medicationTriggers,
        painTriggers:       state.triggers.painTriggers,
        patientCareTriggers:state.triggers.patientCareTriggers,
        pediatricTriggers:  state.triggers.pediatricTriggers,
        perinatalTriggers:  state.triggers.perinatalTriggers,
        readmissionTriggers:state.triggers.readmissionTriggers,
        renalInjuryTriggers:state.triggers.renalInjuryTriggers,
        surgicalTriggers:   state.triggers.surgicalTriggers,
        selectedTriggerSourceDataID: state.triggerDetail.selectedTriggerSourceDataID,
        selectedpatientencounterid: state.encounter.selectedpatientencounterid,
        yourTriggers: state.triggers.yourTriggers
    }
}

export default connect( mapStateToProps, 
    {getTriggers: getTriggers,
    getUserInfo: getUserInfo,
    selectTrigger:selectTrigger,
    selectEncounter:selectEncounter,
    selectMRN:selectMRN,
    selectMyTriggers:selectMyTriggers
} 
)(Triggers);