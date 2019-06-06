import React from 'react';
import axios from 'axios';
import CreatePostForm from '../components/CreatePostForm';
import { Collapse } from 'antd';
import { Card } from 'antd';

const Panel = Collapse.Panel;

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
            <div>   
                <Card title={this.state.post.title}>
                    <p>{this.state.post.description}</p>
                    <p>{this.state.post.author}</p>
                </Card>

                <br />
                <Collapse>
                    <Panel header="Update the post">
                        <CreatePostForm requestMethod='put' postID={this.props.match.params.postID} btnTxt="Update" />
                    </Panel>
                </Collapse>
            </div>
           
        );
    }
}

export default PostDetailView;
