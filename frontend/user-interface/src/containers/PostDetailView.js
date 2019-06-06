import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class PostDetailView extends React.Component{

    state = {
        post: {}
     }

    componentDidMount(){
        const postID = this.props.match.params.postID;

        axios.get(`http://localhost:8000/api/${postID}/`)
        .then(res => {
            this.setState({
                post: res.data
            });
        });
    }
    render(){
        return(
            <Card title={this.state.post.title}>
                <p>{this.state.post.description}</p>
                <p>{this.state.post.author}</p>
            </Card>
        );
    }
}

export default PostDetailView;
