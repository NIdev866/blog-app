import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class EditBlogPost extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  componentWillMount(){
    setTimeout(()=>{
      axios.get(`http://localhost:4000/posts/${this.props.match.params.postId}`)
        .then(response => {
          this.setState({
            blogIAmLookingAt: response.data
          })
        })
        .catch((err)=>{
          console.log(err)
        })
    },500)
  }
  handleReturningToMenu(){
    this.setState({ returningToMenu: true })
  }
  handleBlogDeleting(){
    axios.delete(`http://localhost:4000/posts/${this.props.match.params.postId}`)
    this.handleReturningToMenu()
  }
  render(){
    if (this.state.returningToMenu) {
      return <Redirect to={`/`}/>;
    }
    if(this.state.blogIAmLookingAt){
      return(
        <div className="contentBody">
          <div className="contentAlign">
            <div className="singleBlogStyle">
              <h3 className="singleBlogTitle">{this.state.blogIAmLookingAt.title}</h3>
              <p className="singleBlogContent">{this.state.blogIAmLookingAt.details}</p>
            </div>
            <button className="btn btn-primary buttonFloatLeft" 
              onClick={this.handleReturningToMenu.bind(this)}>Return</button>
            <button className="btn btn-danger buttonFloatRight" 
              onClick={this.handleBlogDeleting.bind(this)}>Delete</button>
            <Link to={`${this.props.match.params.postId}/edit`}>
              <button className="btn btn-primary buttonFloatRight" 
                onClick={this.handleReturningToMenu.bind(this)}>Edit</button>
            </Link>
          </div>
        </div>
      )
    }
    else{
      return(<div className="loading">Loading...</div>)
    }
  }
}

export default EditBlogPost