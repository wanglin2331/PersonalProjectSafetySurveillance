import React, { Component } from 'react';
import './Detail.css';
import { connect } from "react-redux";

class Detail extends Component {

    render() {
        return (
            <div className='Detail'>
                    
                    <div className='Line'> Patient <hr width="470" ></hr> </div>
                   <table>
                        <tbody>
                            <tr>
                                <td id='PatTitle'>Patient:</td>
                                <td id='PatTitle'>MRN:</td>
                            </tr>

                            <tr>
                                <td>{this.props.patientlastnm+', '+this.props.patientfirstnm}</td>
                                <td>{this.props.mrn}</td>
                            </tr>

                            <tr>
                                <td id='VisitNUM'>Visit #: </td>
                            </tr>
                            <tr>
                                <td>{this.props.triggerencounterid}</td>
                            </tr>
                        </tbody>
                    </table>

            
                    <div className='Line'> Trigger Event <hr width="420"></hr> </div> 
                    <table className='TriggerDetailTable'>
                        <tbody>
                            <tr>
                                <td>Trigger Date/Time: </td>
                            </tr>

                            <tr>
                                <td><b>{this.props.triggerdts.substr(0, 10)} {this.props.triggerdts.substr(11, 5)}</b></td>
                            </tr>

                            <tr>
                                <td>Trigger Description:</td>
                            </tr>
                            
                            <tr>
                                <td><b>{this.props.triggerdsc} {this.props.triggervaluedsc+' '+this.props.triggerunitdsc}</b></td>
                            </tr>

                            <tr>
                                <td id='Location'>Location:</td>
                                <td>Service:</td>
                            </tr>

                            <tr>
                                <td><b>{this.props.locationnm}</b></td>
                                <td><b>{this.props.triggerservicedsc}</b></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
        triggercategorydsc: state.triggerDetail.triggercategorydsc,
        triggertypedsc: state.triggerDetail.triggertypedsc,
        
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
       
        patientfirstnm: state.triggerDetail.patientfirstnm,
        patientlastnm: state.triggerDetail.patientlastnm,
        mrn: state.triggerDetail.mrn,
        locationnm: state.triggerDetail.locationnm,
    }
}

export default connect( mapStateToProps)(Detail);