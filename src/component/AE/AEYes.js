import React, { Component } from 'react';
import './AEYes.css';
import { connect } from "react-redux";


class AEYes extends Component {

    render() {
        return (
                <div className='AEDetected'>
                    <div className='DetectedBar'>Adverse Event Detected</div>
                        
                        <div className='AEInfo'>

                                    <div>
                                            <span id='DateTitle'>Adverse Event Date</span>
                                            <span id='TimeTitlePadding'>Time</span>
                                    </div>
                                
                                    <div>
                                        <span >{this.props.aedts.substr(0, 10)}</span>
                                        <span id='TimePadding'>{this.props.aedts.substr(11, 5)}</span>
                                    </div>
                        

                            <div className='Title'>Adverse Event Description</div>
                            
                            <div  className='AEYesDSC'>
                                    <div>{this.props.aedescription}</div> 
                                    <div id='AEYesNoteByUser'>-- {this.props.notebyuser}</div>
                                    <div  id='AEYesNoteDTS'>(Description updated: {this.props.updateddts.substr(0, 10)} {this.props.updateddts.substr(11, 5)})</div>
                            </div>
                            
                            
                            
                            <div  className='Title'>Severity </div>
                            <div>
                                <button disabled className={this.props.severity==='A'? 'severityButtonSelectA' : 'severityButtonNotSelect'}>A</button>
                                <button disabled className={this.props.severity==='B'? 'severityButtonSelectB' : 'severityButtonNotSelect'}>B</button>
                                <button disabled className={this.props.severity==='C'? 'severityButtonSelectC' : 'severityButtonNotSelect'}>C</button>
                                <button disabled className={this.props.severity==='D'? 'severityButtonSelectD' : 'severityButtonNotSelect'}>D</button>
                                <button disabled className={this.props.severity==='E'? 'severityButtonSelectE' : 'severityButtonNotSelect'}>E</button>
                                <button disabled className={this.props.severity==='F'? 'severityButtonSelectF' : 'severityButtonNotSelect'}>F</button>
                                <button disabled className={this.props.severity==='G'? 'severityButtonSelectG' : 'severityButtonNotSelect'}>G</button>
                                <button disabled className={this.props.severity==='H'? 'severityButtonSelectH' : 'severityButtonNotSelect'}>H</button>
                                <button disabled className={this.props.severity==='I'? 'severityButtonSelectI' : 'severityButtonNotSelect'}>I</button>

                            </div>
                        
                            <div  className='Title'>Location of Adverse Event </div>
                            <div  className='AEContent'>{this.props.aelocation}</div>
                        
                            <div  className='Title'>Adverse Event Category {this.props.aecategory}</div>
                            <div  className='AEContent'>{this.props.aecategory}</div>
                        </div>
                </div>
                
        )
    }
}

const mapStateToProps = state => {
    return {
        
        
        aedts: state.triggerDetail.aedts,
        aedescription: state.triggerDetail.aedescription,
        severity: state.triggerDetail.severity,
        aelocation: state.triggerDetail.aelocation,
        aecategory: state.triggerDetail.aecategory,
        updateddts: state.triggerDetail.updateddts,
        notebyuser: state.triggerDetail.notebyuser,

    }
}

export default connect( mapStateToProps)(AEYes);