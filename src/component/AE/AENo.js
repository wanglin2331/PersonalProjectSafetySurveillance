import React, { Component } from 'react';
import './AENo.css';
import { connect } from "react-redux";


class AENo extends Component {

    render() {
        return (
                <div className='AENotDetected'>
                    <div className='NotDetectedBar'>No Adverse Event Detected</div>
                    <div className='AEInfo'>
                        <div className='AENoDSC'>
                                    <div id='NoAEWhy'>Notes on why no adverse event detected: </div> 
                                    <div>{this.props.aedescription ? this.props.aedescription :'No notes recorded yet...'}</div> 
                                    <div id='AENoNoteByUser'>-- {this.props.notebyuser}</div>
                                    <div id='AENoNoteDTS'>(Description updated: {this.props.updateddts.substr(0, 10)} {this.props.updateddts.substr(11, 5)})</div>

                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
        aedescription: state.triggerDetail.aedescription,
        updateddts: state.triggerDetail.updateddts,
        notebyuser: state.triggerDetail.notebyuser,

    }
}

export default connect( mapStateToProps)(AENo);