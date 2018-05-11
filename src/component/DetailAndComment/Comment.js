import React, { Component } from 'react';
import './Comment.css';
import { connect } from "react-redux";
import { createComment, deleteComment} from "../../redux/reducers/triggerDetail";



class Comment extends Component {
    constructor() {
        super();
        this.state = {
          newComment: ''
        };
    }



    HandleCommentInput= (e) => {
        this.setState({newComment: e.target.value })
    };


    render() {
        return (
            <div className='CommentSection'>
                    
                    <input placeholder="Type a comment here" onChange={this.HandleCommentInput}></input>

                    
                    <div className='CommentButton'>
                        <button className={this.state.newComment? 'CommentButtonActive' : 'CommentButtonInactive'} 
                        onClick={()=>this.props.createComment(
                        this.props.triggersourcedataid,
                        this.state.newComment,
                        this.props.username)}>Add Comment</button>
                    </div>

                    {this.props.comments[0]
                    ? 
                        <div>{this.props.comments.map((comment) => {
                            return (
                                <div className='Comment' key={comment.commentdts}>
                                    
                                    <div className='CommentUser'>
                                        <span><b>{comment.commentbyuser}</b><span id='CommentDTS'>{comment.commentdts.substr(0, 10)+ ' '+comment.commentdts.substr(11, 5)}</span></span>
                                        
                                        
                                        <button className='DeleteCommentButton' onClick={()=>this.props.deleteComment(
                                        comment.commentid,
                                        this.props.triggersourcedataid)}>
                                        X
                                        </button>
                                    </div>

                                    <p id='Comment'>{comment.commenttxt}</p> 
                                    
                                    <hr width="550"></hr>
                                </div>   
                                )}
                        )}
                        </div> 
                    : 
                        <div id='Comment'>no comments yet</div>
                    }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.triggers.username,
        triggersourcedataid: state.triggerDetail.triggersourcedataid,
        comments: state.triggerDetail.comments
    }
}

export default connect( mapStateToProps,{  createComment: createComment, deleteComment:deleteComment } )(Comment);