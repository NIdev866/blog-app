import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class EditBlogPost extends Component{
  constructor(props){
    super(props)
    this.state = {}
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault()
    axios.put(`http://localhost:4000/posts/${this.props.match.params.postId}`, {
      id: this.props.match.params.postId,
      title: this.state.title,
      details: this.state.content
    })
    this.setState({ redirect: true })
  }
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handleContentChange(event) {
    this.setState({content: event.target.value});
  }
  render(){
    if (this.state.redirect) {
       return <Redirect to={`/${this.props.match.params.postId}`}/>;
    }
    return(
      <div className="form-group contentBody">
        <div className="contentAlign">
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Title" className="form-control titleInput" type="text" 
              value={this.state.title} onChange={this.handleTitleChange}/>
            <textarea placeholder="Content" className="form-control" type="text" 
              value={this.state.content} onChange={this.handleContentChange} rows="4" cols="50"/>
            <div><button className="btn btn-primary buttonFloatRight" type="submit">Save</button></div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditBlogPost