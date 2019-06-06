import React from 'react';
import PostsTable from '../components/PostsTable';
import axios from 'axios';


class PostsView extends React.Component{

    state = {
        posts: []
     }

    componentDidMount(){
        axios.get('http://localhost:8000/api/')
        .then(res => {
            this.setState({
                posts: res.data
            });
            console.log(res.data);
        });
    }
    render(){
        return(
            <PostsTable data={this.state.posts} />
        );
    }
}

export default PostsView;
