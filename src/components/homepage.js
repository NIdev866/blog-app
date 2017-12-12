import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class SingleBlogLink extends Component{
  render(){
    return(
      <Link className="hoverLink" to={`${this.props.postData.id}`}>
        <div className="blogFromList list-group-item">
          {this.props.postData.title}
        </div>
      </Link>
    )
  }
}

class Homepage extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  componentWillMount(){
    setTimeout(()=>{
      axios.get(`http://localhost:4000/posts`)
        .then(response => {
          this.setState({
            allPosts: response.data
          })
        })
        .catch((err)=>{
          console.log(err)
        })
    },500)
  }
  handleNewPostClick(){
    this.setState({ newBlogPost: true })
  }
  render(){
    if(this.state.newBlogPost) {
      return <Redirect to={`/new`}/>;
    }
    else if(this.state.allPosts){
      return(
        <div>
          <div className="contentAlign">
            <h3 className="homepageHeader">All blog posts</h3>
            <div className="listOfAllBlogs list-group">
              {this.state.allPosts.map((singlePost)=>{
                return <SingleBlogLink postData={singlePost}/>
              })}
            </div>
            <button className="btn btn-primary newPostButton" onClick={this.handleNewPostClick.bind(this)}
              >New post</button>
          </div>
        </div>
      )
    }
    else{
      return(<div className="loading">Loading...</div>)
    }
  }
}

export default Homepage