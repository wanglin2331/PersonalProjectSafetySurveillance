import React, { Component } from 'react';
import logo from '../HCLogo.jpg';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {logout, getUserInfo} from "../redux/reducers/user";
import {getTriggers} from "../redux/reducers/triggers";
import {selectTrigger} from "../redux/reducers/triggerDetail";

class Triggers extends Component {
    constructor() {
        super();
    
        this.state = {
          triggersToDisplay: []
        };

    }

    componentWillMount() {
        this.props.getUserInfo();
        this.props.getTriggers();
    };

    componentWillReceiveProps = (props) => {
        this.setState({ triggersToDisplay: props.allTriggers})
    }

    logout() {
        this.props.logout();
          
    };


    render() {
        return (
        <div>
            {this.props.loginStatus==='Success'
            ?
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className="App-title">Safety<b>Surveillance</b></p>
                        <p className="Nav-tabs">Triggers</p>
                        <p className="Nav-tabs">Chart Review</p>
                        <p className="Nav-tabs">Risk Prediction</p>
                        <p className="Nav-tabs">Adverse Events</p>
                        <p> {this.props.username} <Link to={"/"}><button onClick={()=>this.logout()}>Logout</button></Link> </p>
                    </header>
                
                    <body>

                    <div className="HospitalInfoBar">
                        <h4>Healthcare System:</h4>

                        <h3>Number of Patienrs with Positive Triggers:</h3>
                    
                    </div>

                    <div className="TriggerVolumnBar">

                        <li onClick={() => this.setState({ triggersToDisplay: this.props.allTriggers })}> <div id="all" > {this.props.allTriggers.length} All</div></li>
                        <li onClick={()=>this.setState({ triggersToDisplay: this.props.coagulationTriggers })}> {this.props.coagulationTriggers.length} Coagulation</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.glycemicTriggers })}> {this.props.glycemicTriggers.length} Glycemic</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.infectionsTriggers })}> {this.props.infectionsTriggers.length} Healthcare Associated Infections</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.medicationTriggers })}> {this.props.medicationTriggers.length} Medication Reversal</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.painTriggers })}> {this.props.painTriggers.length} Pain Management</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.patientCareTriggers })}> {this.props.patientCareTriggers.length} Patient Care</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.pediatricTriggers })}> {this.props.pediatricTriggers.length} Pediatric</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.perinatalTriggers })}> {this.props.perinatalTriggers.length} Perinatal</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.readmissionTriggers })}> {this.props.readmissionTriggers.length} Readmission</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.renalInjuryTriggers })}> {this.props.renalInjuryTriggers.length} Renal Injury</li>
                        <li onClick={()=>this.setState({triggersToDisplay: this.props.surgicalTriggers })}> {this.props.surgicalTriggers.length} Surgical</li>
                    
                    </div>
                    <div>
                    
                    <table>
                        <tr>
                            <th>Status</th>
                            <th>Patient</th>
                            <th>Positive Trigger</th>
                            <th>Triggering Event</th>
                            <th>Trigger Date/Time</th>
                            <th>Unit</th>
                            <th>LOS</th>
                            <th>Adverse Event</th>

                        </tr>
                        
                            {this.state.triggersToDisplay.map((trigger) => {

                                return (
                                    <tr>
                                        <td>{trigger.triggerstatus}</td>
                                        <td>{trigger.patientlastnm+', '+trigger.patientfirstnm} {'Visit#: '+trigger.triggerencounterid}</td>
                                        <Link to={"/triggerdetail/"+trigger.triggersourcedataid}><td onClick={()=>this.props.selectTrigger(trigger.triggersourcedataid)}>{trigger.triggernm}</td></Link>
                                        <td>{trigger.triggerdsc} {trigger.triggervaluedsc+' '+trigger.triggerunitdsc}</td>
                                        <td>{trigger.triggerdts}</td>
                                        <td>{trigger.triggerunitnm}</td>
                                        <td>{trigger.los}</td>
                                        <td>{trigger.aeflg ?(trigger.aeflg==='Y'?'Yes':'No'):'--'}</td>
                                    </tr>
                                )
                            })}
                        
                    </table>

                    </div>
                    </body>
                
                </div>
                :
                <div>
                    {this.props.loginStatus==='Pending'
                        ?
                        <h2>Loading...</h2>
                        :
                        <div>
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
        selectedTriggerSourceDataID: state.triggerDetail.selectedTriggerSourceDataID
    }
}

export default connect( mapStateToProps, {logout: logout, getTriggers: getTriggers, getUserInfo: getUserInfo, selectTrigger:selectTrigger} )(Triggers);