import React, { Component } from 'react';
import './AETBD.css';
import { connect } from "react-redux";
import {createAdverseEvent} from "../../redux/reducers/triggerDetail";




class AETBD extends Component {
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
          newaeqipflg: 'N'
        };
    }


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





    render() {
        return (
            <div> 
                    <div className='AEDectectBar'>
                            <div>
                                <button className={this.state.AEFound==='Y' ? 'AEDetectButtonYesSelected' : 'AEDetectButtonYes'} onClick={()=>this.selectAEFoundInput()}>Adverse Event Detected</button>
                                <button className={this.state.AEFound==='N' ? 'AEDetectButtonNoSelected' : 'AEDetectButtonNo'} onClick={()=>this.selectAENotFoundInput()}>No Adverse Event</button>
                            </div>

                            {this.state.AEFound
                            ?    
                            <div className='SaveCancelButton'>
                                <button className='CancelButton'>cancel</button>
                                <button className='SaveButton' onClick=
                                        
                                        {this.state.AEFound==='Y'
                                        ?
                                        ()=>this.props.createAdverseEvent(
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
                                        this.props.username)
                                        :
                                        ()=>this.props.createAdverseEvent(
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
                                            this.props.username)
                                        }>
                                Save</button>
                            </div>
                            :
                            <button className='SaveDisable'>Save</button>
                            }
                            

                    </div>

                    {this.state.AEFound==='Y'
                    ?
                    <div>                        
                        
                        <div className='AEInput'>
                                <div className='DTS'>
                                        <div>
                                            <span className='DTSInput'>Adverse Event Date</span>
                                            <span className='DTSInput'>Time</span>
                                        </div>

                                        <div>
                                            <input className='DTSInput' type="date" value={this.props.triggerdts.substr(0, 10)} onChange={this.HandleAEDate}></input>
                                            <input className='DTSInput' value={this.props.triggerdts.substr(11, 5)} onChange={this.HandleAETime}></input>
                                            <input id="POAcheckBox" type="checkbox" onClick={()=>this.HandlePOA()}></input>Present on Admission
                                        </div>
                                </div>
                                
                                Description
                                <textarea className='AEDSCInput' onChange={this.HandleAEDSC}></textarea>
                                

                                
                                Severity
                                <div className='Severity'>
                                        <button className={this.state.newaeseverity==='A'||!this.state.newaeseverity ? 'severityButtonSelectA' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('A')}>A</button>
                                        <button className={this.state.newaeseverity==='B'||!this.state.newaeseverity ? 'severityButtonSelectB' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('B')}>B</button>
                                        <button className={this.state.newaeseverity==='C'||!this.state.newaeseverity ? 'severityButtonSelectC' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('C')}>C</button>
                                        <button className={this.state.newaeseverity==='D'||!this.state.newaeseverity ? 'severityButtonSelectD' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('D')}>D</button>
                                        <button className={this.state.newaeseverity==='E'||!this.state.newaeseverity ? 'severityButtonSelectE' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('E')}>E</button>
                                        <button className={this.state.newaeseverity==='F'||!this.state.newaeseverity ? 'severityButtonSelectF' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('F')}>F</button>
                                        <button className={this.state.newaeseverity==='G'||!this.state.newaeseverity ? 'severityButtonSelectG' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('G')}>G</button>
                                        <button className={this.state.newaeseverity==='H'||!this.state.newaeseverity ? 'severityButtonSelectH' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('H')}>H</button>
                                        <button className={this.state.newaeseverity==='I'||!this.state.newaeseverity ? 'severityButtonSelectI' : 'severityButtonNotSelect'} onClick={()=>this.HandleAESeverity('I')}>I</button>
                                </div>

                                
                                <span>Location of Adverse Event</span>
                                <select  className='AELocationInput' onChange={this.HandleAELocation}  value={this.props.locationnm}>
                                    <option value={this.props.locationnm}>{this.props.locationnm}</option>
                                    <option value="W2300">W2300</option>
                                    <option value="H4000">H4000</option>
                                </select>
                                

                                
                                <span>Adverse Event Category</span>
                                <select  className='AECategoryInput' onChange={this.HandleAECategory} >
                                    <option value="" selected disabled hidden></option>
                                    <option value="Events related to Medication / IV fluids">Events related to Medication / IV fluids</option>
                                    <option value="Events related to Perinatal Care">Events related to Perinatal Care</option>
                                    <option value="Events related to surgery or other procedures">Events related to surgery or other procedures</option>
                                    <option value="Events related to heathcare associated infections">Events related to heathcare associated infections</option>
                                    <option value="UNKNOWN">UNKNOWN</option>
                                </select>
                                

                                <div className='AEFLAG'>
                                        <input id="checkBox" type="checkbox" onClick={()=>this.HandlerRegReport()}></input>Regulatory Reporting
                                        <input id="QIFLGcheckBox" type="checkbox" onClick={()=>this.HandleQI()}></input>Potential Quality Improvement Project
                                </div>
                        </div>
                    </div>
                    :
                    <div>
                            {this.state.AEFound==='N'
                            ?
                            
                            <div className='NoAENotes'>

                                <span>Notes on why no adverse event Detected</span>
                                <textarea  type='text' onChange={this.HandleAEDSC}></textarea >
                            </div>
                            :
                            <div  className='AEInput'>
                        
                                <div className='DTS'>
                                        <div>
                                            <span className='DTSInput'>Adverse Event Date</span>
                                            <span className='DTSInput'>Time</span>
                                        </div>

                                        <div>
                                            <input disabled className='DTSInput' type="date" value={this.props.triggerdts.substr(0, 10)} ></input>
                                            <input disabled className='DTSInput' value={this.props.triggerdts.substr(11, 5)}></input>
                                            <input disabled id="POAcheckBox" type="checkbox" ></input>Present on Admission
                                        </div>
                                </div>
                                        
                                Description
                                <textarea disabled className='AEDSCInput' ></textarea>
                                        

                                Severity
                                <div className='Severity'>
                                        <button disabled className='severityButtonNotSelect'>A</button>
                                        <button disabled className='severityButtonNotSelect'>B</button>
                                        <button disabled className='severityButtonNotSelect'>C</button>
                                        <button disabled className='severityButtonNotSelect'>D</button>
                                        <button disabled className='severityButtonNotSelect'>E</button>
                                        <button disabled className='severityButtonNotSelect'>F</button>
                                        <button disabled className='severityButtonNotSelect'>G</button>
                                        <button disabled className='severityButtonNotSelect'>H</button>
                                        <button disabled className='severityButtonNotSelect'>I</button>
                                </div>

                                        
                                <span>Location of Adverse Event</span>
                                <select disabled className='AELocationInput' value={this.props.locationnm}>
                                    <option value={this.props.locationnm}>{this.props.locationnm}</option>
                                    <option value="W2300">W2300</option>
                                    <option value="H4000">H4000</option>
                                </select>
                                        

                                        
                                <span>Adverse Event Category</span>
                                <select disabled defaultValue="" className='AECategoryInput' >
                                    <option value="" disabled hidden></option>
                                    <option value="Events related to Medication / IV fluids">Events related to Medication / IV fluids</option>
                                    <option value="Events related to Perinatal Care">Events related to Perinatal Care</option>
                                    <option value="Events related to surgery or other procedures">Events related to surgery or other procedures</option>
                                    <option value="Events related to heathcare associated infections">Events related to heathcare associated infections</option>
                                    <option value="UNKNOWN">UNKNOWN</option>
                                </select>
                                        

                                <div className='AEFLAG'>
                                        <input  disabled id="checkBox" type="checkbox"></input>Regulatory Reporting
                                        <input  disabled id="QIFLGcheckBox"  type="checkbox"></input>Potential Quality Improvement Project
                                </div>

                            </div>
                            }
                    </div>
                    }
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        
        username: state.triggers.username,
        triggersourcedataid: state.triggerDetail.triggersourcedataid,
        triggerunitnm: state.triggerDetail.triggerunitnm,
        triggerdts: state.triggerDetail.triggerdts,     
        locationnm: state.triggerDetail.locationnm,

    }
}

export default connect( mapStateToProps, { createAdverseEvent: createAdverseEvent } )(AETBD);