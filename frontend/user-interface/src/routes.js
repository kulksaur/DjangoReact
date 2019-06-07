import React from 'react';
import { Route } from 'react-router-dom';
import PostsView from './containers/PostsView';
import PostDetailView from './containers/PostDetailView';

// Adding routes for our PostsView(Tabular View) and PostsDetailView(Post Detailed View)
const BaseRouter = () => (
    <div>
        <Route exact path="/" component={PostsView} />
        <Route exact path="/:postID" component={PostDetailView} />
    </div>
);

export default BaseRouter;
