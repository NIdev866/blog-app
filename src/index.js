import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ViewSingleBlog from './components/viewSingleBlog'
import EditBlogPost from './components/editBlogPost'
import NewBlogPost from "./components/newBlogPost"
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="App">
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/new" component={NewBlogPost} />
          <Route path="/:postId/edit" component={EditBlogPost} />
          <Route path="/:postId" component={ViewSingleBlog} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
