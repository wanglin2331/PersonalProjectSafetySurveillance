import React, { Component } from 'react';
import logo from '../HCLogo.jpg';
import { connect } from "react-redux";
import {logout, getUserInfo} from "../redux/reducers/user";
import {getTrigger, updateTriggerStatus, createAdverseEvent, getComments,  createComment} from "../redux/reducers/triggerDetail";
import {Link} from 'react-router-dom';


class TriggerDetail extends Component {
    constructor() {
        super();
    
        this.state = {
          AEFound: '',
          
          newaedescription: null,
          newaedate: null,
          newaetime: null,
          newaepoa: 'N',
          newaeseverity: null,
          newaelocation: null,
          newaecategory: null,
          newaeregreportflg: 'N',
          newaeqipflg: 'N',
          newComment: ''
        };
    }

    componentWillMount() {
        this.props.getUserInfo();
        this.props.getTrigger(this.props.selectedTriggerSourceDataID);
        this.props.getComments(this.props.selectedTriggerSourceDataID)
    };

    componentWillReceiveProps = (props) => {
        this.setState({ newaedate: props.triggerdts.substr(0, 10),
                        newaetime: props.triggerdts.substr(11, 5),
                        newaelocation: props.locationnm               
        })
    };

    selectAEFoundInput(){
        this.setState({ AEFound: 'Y',
                        newaedate: this.props.triggerdts.substr(0, 10),
                        newaetime: this.props.triggerdts.substr(11, 5),
                        newaelocation: this.props.locationnm
                        })
    };

    selectAENotFoundInput(){
        this.setState({ AEFound: 'N',
                        newaedate: null,
                        newaetime: null,
                        newaedescription: null,
                        newaeseverity: null,
                        newaelocation: null,
                        newaecategory: null
                        })
    };

    HandlePOA(){
        const newflg= (this.state.newaepoa==='N' ? 'Y' : 'N')
        this.setState({newaepoa: newflg})
    };

    HandlerRegReport(){
        const newflg= (this.state.newaeregreportflg==='N' ? 'Y' : 'N')
        this.setState({newaeregreportflg: newflg})
    };

    HandleQI(){
        const newflg= (this.state.newaeqipflg==='N' ? 'Y' : 'N')
        this.setState({newaeqipflg: newflg})
    };

    HandleAEDate= (e) => {
        this.setState({newaedate: e.target.value })
    };

    HandleAETime= (e) => {
        this.setState({newaetime: e.target.value })
    };

    HandleAEDSC= (e) => {
        this.setState({newaedescription: e.target.value })
    };

    HandleAESeverity= (rating) => {
        this.setState({newaeseverity: rating })
    };

    HandleAELocation= (e) => {
        this.setState({newaelocation: e.target.value })
    };

    HandleAECategory= (e) => {
        this.setState({newaecategory: e.target.value })
    };

    HandleCommentInput= (e) => {
        this.setState({newComment: e.target.value })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-title">Safety<b>Surveillance</b></p>
                    <p className="Nav-tabs">Triggers</p>
                    <p className="Nav-tabs">Chart Review</p>
                    <p className="Nav-tabs">Risk Prediction</p>
                    <p className="Nav-tabs">Adverse Events</p>
                    <p> {this.props.username} <Link to={"/"}><button onClick={()=>this.props.logout()}>Logout</button></Link> </p>
                </header>

                <div>
                        Status: 
                        <select onChange={ (e) => this.props.updateTriggerStatus(e.target.value,this.props.triggersourcedataid) }>
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
                        <select>
                            <option value="lin.wang">lin.wang</option>
                            <option value="valere.lemon">valere.lemon</option>
                        </select>
                        <button>Watch</button>
                </div>

                <div className="AEContent">
                        <div>
                            {this.props.aeflg ==='Y' 
                            ?   <div>Adverse Event Detected
                                        <div>   Adverse Event Date {this.props.triggerdts.substr(0, 10)}
                                                Time {this.props.triggerdts.substr(11, 5)}
                                        </div>
                                        <div>Adverse Event Description {this.props.aedescription}</div>
                                        <div>Notes by {this.props.notebyuser}</div>
                                        <div>(Description updated: {this.props.updateddts})</div>
                                        <div>Severity 
                                               {this.props.severity==='A'?<button>A</button>:<span>A</span>}
                                               {this.props.severity==='B'?<button>B</button>:<span>B</span>}
                                               {this.props.severity==='C'?<button>C</button>:<span>C</span>}
                                               {this.props.severity==='D'?<button>D</button>:<span>D</span>}
                                               {this.props.severity==='E'?<button>E</button>:<span>E</span>}
                                               {this.props.severity==='F'?<button>F</button>:<span>F</span>}
                                               {this.props.severity==='G'?<button>G</button>:<span>G</span>}
                                               {this.props.severity==='H'?<button>H</button>:<span>H</span>}
                                               {this.props.severity==='I'?<button>I</button>:<span>I</span>}
                                        </div>
                                        <div>Location of Adverse Event {this.props.aelocation}</div>
                                        <div>Adverse Event Category {this.props.aecategory}</div>
                                </div>
                            
                            : this.props.aeflg === 'N'
                                ?   <div>No Adverse Event Detected
                                        <div>Notes: {this.props.aedescription}
                                            by: {this.props.notebyuser}
                                        </div>
                                    </div>
                                
                                : <div> 
                                        <div>
                                                <button onClick={()=>this.selectAEFoundInput()}>Adverse Event Detected</button>
                                                <button onClick={()=>this.selectAENotFoundInput()}>No Adverse Event</button>
                                        </div>

                                        {this.state.AEFound==='Y'
                                        ?
                                        <div>

                                            <div>
                                                <button>Cancel</button>
                                                <button onClick={()=>this.props.createAdverseEvent(
                                                         this.props.triggersourcedataid,
                                                         this.state.AEFound,
                                                         this.state.newaedescription,
                                                         this.state.newaedate+' '+this.state.newaetime,
                                                         this.state.newaepoa,
                                                         this.state.newaeseverity,
                                                         this.state.newaelocation,
                                                         this.state.newaecategory,
                                                         this.state.newaeregreportflg,
                                                         this.state.newaeqipflg,
                                                         this.props.username)}>
                                                Save</button>
                                            </div>

                                            <div>
                                                    Adverse Event Date<input type="date" value={this.props.triggerdts.substr(0, 10)} onChange={this.HandleAEDate}></input>
                                                    Time <input value={this.props.triggerdts.substr(11, 5)} onChange={this.HandleAETime}></input>
                                                    <input id="checkBox" type="checkbox" onClick={()=>this.HandlePOA()}></input>Present on Admission
                                            </div>
                                            <div>
                                                    Description
                                                    <input onChange={this.HandleAEDSC}></input>
                                            </div>

                                            <div>
                                                    Severity
                                                    <button onClick={()=>this.HandleAESeverity('A')}>A</button>
                                                    <button onClick={()=>this.HandleAESeverity('B')}>B</button>
                                                    <button onClick={()=>this.HandleAESeverity('C')}>C</button>
                                                    <button onClick={()=>this.HandleAESeverity('D')}>D</button>
                                                    <button onClick={()=>this.HandleAESeverity('E')}>E</button>
                                                    <button onClick={()=>this.HandleAESeverity('F')}>F</button>
                                                    <button onClick={()=>this.HandleAESeverity('G')}>G</button>
                                                    <button onClick={()=>this.HandleAESeverity('H')}>H</button>
                                                    <button onClick={()=>this.HandleAESeverity('I')}>I</button>
                                            </div>

                                            <div>
                                                    Location of Adverse Event
                                                    <select onChange={this.HandleAELocation}  value={this.props.locationnm}>
                                                        <option value={this.props.locationnm}>{this.props.locationnm}</option>
                                                        <option value="W2300">W2300</option>
                                                        <option value="H4000">H4000</option>
                                                    </select>
                                            </div>

                                            <div>
                                                    Adverse Event Category
                                                    <select onChange={this.HandleAECategory} >
                                                        <option value="" selected disabled hidden></option>
                                                        <option value="Events related to Medication / IV fluids">Events related to Medication / IV fluids</option>
                                                        <option value="Events related to Perinatal Care">Events related to Perinatal Care</option>
                                                        <option value="Events related to surgery or other procedures">Events related to surgery or other procedures</option>
                                                        <option value="Events related to heathcare associated infections">Events related to heathcare associated infections</option>
                                                        <option value="UNKNOWN">UNKNOWN</option>
                                                    </select>
                                            </div>

                                            <div>
                                                    <input id="checkBox" type="checkbox" onClick={()=>this.HandlerRegReport()}></input>Regulatory Reporting
                                                    <input id="checkBox" type="checkbox" onClick={()=>this.HandleQI()}></input>Potential Quality Improvement Project
                                            </div>
                                        </div>
                                        :
                                        <div>
                                                {this.state.AEFound==='N'
                                                ?
                                                
                                                <div>
                                                    <div>
                                                        <button>Cancel</button>
                                                        <button onClick={()=>this.props.createAdverseEvent(
                                                         this.props.triggersourcedataid,
                                                         this.state.AEFound,
                                                         this.state.newaedescription,
                                                         this.state.newaedate,
                                                         this.state.newaepoa,
                                                         this.state.newaeseverity,
                                                         this.state.newaelocation,
                                                         this.state.newaecategory,
                                                         this.state.newaeregreportflg,
                                                         this.state.newaeqipflg,
                                                         this.props.username)}>Save</button>
                                                    </div>

                                                    Notes on why no adverse event Detected
                                                    <input onChange={this.HandleAEDSC}></input>
                                                </div>
                                                :
                                                <div>
                                               
                                                            <div>
                                                                <button disabled>Save</button>
                                                            </div>

                                                            <div>
                                                                Adverse Event Date<input disabled value={this.props.triggerdts.substr(0, 10)}></input>
                                                                Time <input disabled value={this.props.triggerdts.substr(11, 5)}></input>
                                                                <input disabled id="checkBox" type="checkbox"></input>Present on Admission
                                                            </div>
                                                            <div>
                                                                    Description
                                                                    <input disabled ></input>
                                                            </div>

                                                            <div>
                                                                    Severity
                                                                    <button disabled>A</button>
                                                                    <button disabled>B</button>
                                                                    <button disabled>C</button>
                                                                    <button disabled>D</button>
                                                                    <button disabled>E</button>
                                                                    <button disabled>F</button>
                                                                    <button disabled>G</button>
                                                                    <button disabled>H</button>
                                                                    <button disabled>I</button>
                                                            </div>

                                                            <div>
                                                                    Location of Adverse Event
                                                                    <select disabled>
                                                                        <option value="W2300">W2300</option>
                                                                        <option value="H4000">H4000</option>
                                                                    </select>
                                                            </div>

                                                            <div>
                                                                    Adverse Event Category
                                                                    <select disabled>
                                                                        <option value="" selected disabled hidden></option>
                                                                        <option value="Events related to Medication / IV fluids">Events related to Medication / IV fluids</option>
                                                                        <option value="Events related to Perinatal Care">Events related to Perinatal Care</option>
                                                                        <option value="Events related to surgery or other procedures">Events related to surgery or other procedures</option>
                                                                        <option value="Events related to heathcare associated infections">Events related to heathcare associated infections</option>
                                                                        <option value="UNKNOWN">UNKNOWN</option>
                                                                    </select>
                                                            </div>

                                                            <div>
                                                                    <input  disabled id="checkBox" type="checkbox"></input>Regulatory Reporting
                                                                    <input  disabled id="checkBox" type="checkbox"></input>Potential Quality Improvement Project
                                                            </div>

                                                </div>
                                                }
                                        </div>
                                        }
                                </div>
                        }
                        </div>
                       
                        <div>
                            <h1>Details</h1>
                            <h3>{this.props.patientlastnm+', '+this.props.patientfirstnm}</h3>
                            <h3>{this.props.mrn}</h3>
                            <h3>Visit #: {this.props.triggerencounterid}</h3>
                            
                            <h2>Trigger Event</h2>
                            <h3>Trigger Date/Time: {this.props.triggerdts}</h3>
                            <h3>Trigger Description: {this.props.triggerdsc}</h3>
                            <h3>Trigger Value: {this.props.triggervaluedsc+' '+this.props.triggerunitdsc}</h3>
                            <h3>Location: {this.props.locationnm}</h3>
                            <h3>Service: {this.props.triggerservicedsc}</h3>
                        </div>

                        <div>
                            <h1>Comment</h1>
                            <input placeholder="Type a comment here" onChange={this.HandleCommentInput}></input>

                            <button onClick={()=>this.props.createComment(
                                this.props.triggersourcedataid,
                                this.state.newComment,
                                this.props.username)}>Add Comment</button>

                            
                            {this.props.comments 
                                            ? 
                                            <div>{this.props.comments.map((comment) => {
                                                return (
                                                    <div>
                                                        {comment.commenttxt}
                                                        {comment.commentdts.substr(0, 10)+ ' '+comment.commentdts.substr(11, 5)}
                                                        --{comment.commentbyuser}
                                                    </div>   
                                                    )}
                                            )}
                                            </div> 
                                            : 
                                            <div>no comments yet</div>}
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.user.username,
        selectedTriggerSourceDataID: state.triggerDetail.selectedTriggerSourceDataID,
        triggerstatus: state.triggerDetail.triggerstatus,
        triggerid: state.triggerDetail.triggerid,
        triggernm: state.triggerDetail.triggernm,
        triggercategorydsc: state.triggerDetail.triggercategorydsc,
        triggertypedsc: state.triggerDetail.triggertypedsc,
        triggersourcedataid: state.triggerDetail.triggersourcedataid,
        triggerencounterid: state.triggerDetail.triggerencounterid,
        triggerservicedsc: state.triggerDetail.triggerservicedsc,
        triggerunitnm: state.triggerDetail.triggerunitnm,
        triggerroomnm: state.triggerDetail.triggerroomnm,
        triggerbednm: state.triggerDetail.triggerbednm,
        triggerdsc: state.triggerDetail.triggerdsc,
        triggervaluedsc: state.triggerDetail.triggervaluedsc,
        triggerunitdsc: state.triggerDetail.triggerunitdsc,
        triggerdts: state.triggerDetail.triggerdts,
        prereqeventsourcedataid: state.triggerDetail.prereqeventsourcedataid,
        prereqeventencounterid: state.triggerDetail.prereqeventencounterid,
        prereqeventservicedsc: state.triggerDetail.prereqeventservicedsc,
        prereqeventunitnm: state.triggerDetail.prereqeventunitnm,
        prereqeventlocationnm: state.triggerDetail.prereqeventlocationnm,
        prereqeventdsc: state.triggerDetail.prereqeventdsc,
        prereqeventvaluedsc: state.triggerDetail.prereqeventvaluedsc,
        prereqeventunitdsc: state.triggerDetail.prereqeventunitdsc,
        prereqeventdts: state.triggerDetail.prereqeventdts,
        relatedeventdts: state.triggerDetail.relatedeventdts,
        relatedeventtypedsc: state.triggerDetail.relatedeventtypedsc,
        relatedeventdsc: state.triggerDetail.relatedeventdsc,
        aeflg: state.triggerDetail.aeflg,
        aedts: state.triggerDetail.aedts,
        aedescription: state.triggerDetail.aedescription,
        severity: state.triggerDetail.severity,
        aelocation: state.triggerDetail.aelocation,
        aecategory: state.triggerDetail.aecategory,
        poa: state.triggerDetail.poa,
        regreportflg: state.triggerDetail.regreportflg,
        qipflg: state.triggerDetail.qipflg,
        updateddts: state.triggerDetail.updateddts,
        notebyuser: state.triggerDetail.notebyuser,
        patientfirstnm: state.triggerDetail.patientfirstnm,
        patientlastnm: state.triggerDetail.patientlastnm,
        mrn: state.triggerDetail.mrn,
        patientencounterid: state.triggerDetail.patientencounterid,
        locationnm: state.triggerDetail.locationnm,
        comments: state.triggerDetail.comments
    }
}


export default connect  ( mapStateToProps, {  getUserInfo: getUserInfo,
                                            getTrigger:getTrigger,
                                            logout:logout,
                                            updateTriggerStatus: updateTriggerStatus,
                                            createAdverseEvent: createAdverseEvent,
                                            getComments: getComments,
                                            createComment: createComment
                                        } 
                        )(TriggerDetail);