import React from 'react';
import { Route } from 'react-router-dom';
import PostsView from './containers/PostsView';
import PostDetailView from './containers/PostDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={PostsView} />
        <Route exact path="/:postID" component={PostDetailView} />
    </div>
);

export default BaseRouter;
