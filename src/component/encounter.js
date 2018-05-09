import React, { Component } from 'react';
import './encounter.css';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

import {getUserInfo} from "../redux/reducers/triggers";
import {getEncounter, getEncounterTriggers} from "../redux/reducers/encounter";

import TimeLineBall from './TimeLineBall.png';
import statusimg from './status.png';
import statusdoneimg from './statusdone.png';

import NavBar from './navBar';

import {selectTrigger} from "../redux/reducers/triggerDetail";


class Encounter extends Component {
    constructor() {
        super();
    
        this.state = {
          
        };

    }

    componentWillMount() {
    //     console.log(this.props.match.path);
        this.props.getUserInfo();
        this.props.getEncounter(this.props.selectedpatientencounterid);
        this.props.getEncounterTriggers(this.props.selectedpatientMRN);
    };

    render() {
        return (
            <div className="App"> 
                <div className='body'>
                    <NavBar bar={this.props.match.path}/>
                    <div className='EncounterBackBar'> <Link to={"/triggers"} className='BackArrow'>&#60;<span id='BackButton'>Back</span></Link> </div>
                    <div className='patientDom'>
                        <p id='EncounterDomPatName'>{this.props.patientlastnm}, {this.props.patientfirstnm}</p>
                        <p id='EncounterDomHospitalName'>{this.props.locationnm}</p>
                        <hr id='EncounterDomLine' width="1300" ></hr>
                        <table className='EncounterDomTable'>
                            <tbody>
                                <tr>
                                    <td><span>EMPI:</span>--</td>
                                    <td><span>Weight:</span> {this.props.weightpoundsnbr}</td>
                                    <td><span>Discharge Date:</span> {this.props.hospitaldischargedts.substr(0, 10)+ ' '+ this.props.hospitaldischargedts.substr(11, 5)}</td>
                                </tr>

                                <tr>
                                    <td><span>MRN:</span>{this.props.mrn}</td>
                                    <td><span>Current Visit Date:</span> {this.props.hospitaladmitdts.substr(0, 10)+ ' '+ this.props.hospitaladmitdts.substr(11, 5)}</td>
                                    <td><span>Length Of Stay:</span> {this.props.LOS}</td>
                                </tr>

                                <tr>
                                    <td><span>Current Visit #:</span>{this.props.selectedpatientencounterid}</td>
                                    <td><span>Current Unit:</span> {this.props.currentunitnm}</td>
                                    <td><span>Current Attending Physician:</span> {this.props.currentprovidernm}</td>
                                </tr>

                                <tr>
                                    <td><span>Gender:</span>{this.props.sexdsc}</td>
                                    <td><span>Current Location:</span> {this.props.currentunitnm}</td>
                                    <td><span>Service Line:</span> {this.props.hospitalservicedsc}</td>
                                </tr>

                                <tr>
                                    <td><span>Date Of Birth (Age):</span>{this.props.birthdts.substr(0, 10)}</td>
                                    <td><span>Current Reason Visit:</span>--</td>
                                    <td><span>Primary Admit Diagnosis:</span> {this.props.primarydiagnosisdsc}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className='EncounterTriggers'>                        
                       
                        <div>
                            {this.props.encounterTriggers.map((trigger) => {
                                return (
                                    <div className='EachTrigger' key={trigger.triggersourcedataid}>
                                        <div id='EachTriggerDTS'><p>Trigger Date/Time</p> <p>{trigger.triggerdts.substr(0, 10)}</p> <p>{trigger.triggerdts.substr(11, 5)}</p> </div>
                                        <div id='encounterVL'><img src={TimeLineBall} id='ball' alt="status" /> </div>     
                                        
                                        <div className='Encountertriggerbox'>
                                            <div className='Encountertriggerboxinfo'>
                                                
                                                <div id='StatusColumn'>
                                                    <p>Status:</p>
                                                    <p>{trigger.triggerstatus==='Not Reviewed'
                                                            ?<img src={statusimg} className="Status-Img" alt="status" />
                                                            :<img src={statusdoneimg} className="StatusDone-Img" alt="status" />}
                                                            {trigger.triggerstatus}</p>
                                                </div>

                                                <div id='TriggerColumn'>
                                                    <p id='TriggerNameBox' onClick={()=>this.props.selectTrigger(trigger.triggersourcedataid)}>
                                                        <Link to={"/triggerdetail/"+trigger.triggersourcedataid}>{trigger.triggernm}</Link>
                                                    </p>
                                                    <p>Trigger Description:</p>
                                                    <p><b>{trigger.triggerdsc+' '+ trigger.triggervaluedsc+' '+trigger.triggerunitdsc}</b></p>
                                                    <p>Location:</p>
                                                    <p><b>{trigger.triggerunitnm}</b></p>
                                                </div>
                                                
                                                <div id='PrereqColumn'>
                                                    <p>Prerequisite Event Description:</p>
                                                    <p><b>{trigger.prereqeventdsc+' '+ trigger.prereqeventvaluedsc+' '+trigger.prereqeventunitdsc}</b></p>
                                                    <p>Service:</p>
                                                    <p><b>{trigger.triggerservicedsc}</b></p>
                                                </div>

                                            </div>
                                            
                                            <div id='triggerboxAEFLG'>Adverse Event? <p className={trigger.aeflg==='Y'?'AEY':(trigger.aeflg==='N'?'AEN':'')}>{trigger.aeflg ?(trigger.aeflg==='Y'?'Yes':'No'):'--'}</p></div>
                                            
                                        </div>

                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedpatientencounterid: state.encounter.selectedpatientencounterid,
        selectedpatientMRN: state.encounter.selectedpatientMRN,
        patientencounterid: state.encounter.patientencounterid,
        mrn: state.encounter.mrn,
        patientfirstnm: state.encounter.patientfirstnm,
        patientlastnm: state.encounter.patientlastnm,
        sexdsc: state.encounter.sexdsc,
        birthdts: state.encounter.birthdts,
        weightpoundsnbr: state.encounter.weightpoundsnbr,
        hospitaladmitdts: state.encounter.hospitaladmitdts,
        hospitaldischargedts: state.encounter.hospitaldischargedts,
        departmentnm: state.encounter.departmentnm,
        locationnm: state.encounter.locationnm,
        currentunitnm: state.encounter.currentunitnm,
        currentroomnm: state.encounter.currentroomnm,
        currentbednm: state.encounter.currentbednm,
        hospitalservicedsc: state.encounter.hospitalservicedsc,
        currentprovidernm: state.encounter.currentprovidernm,
        primarydiagnosisdsc: state.encounter.primarydiagnosisdsc,
        financialclassdsc: state.encounter.financialclassdsc,
        LOS: state.encounter.LOS,
        encounterTriggers: state.encounter.EncounterTriggers
    }
}

export default connect ( mapStateToProps, {getUserInfo: getUserInfo, getEncounter:getEncounter, getEncounterTriggers:getEncounterTriggers, selectTrigger:selectTrigger})(Encounter);
