import React from 'react';
import axios from 'axios';
import CreatePostForm from '../components/CreatePostForm';
import { Collapse , Button} from 'antd';
import { Card } from 'antd';

const Panel = Collapse.Panel;

let postID = null;
class PostDetailView extends React.Component{
    
    state = {
        post: {}
     }
     handleDeleteSubmit(){
        axios.delete(`http://localhost:8000/api/${postID}/`)
        .then(res => {
            if(res.status === 204){
                if (typeof window !== 'undefined') {
                    window.location.href = `http://localhost:3000/`;
               }
            }
            });
        };
    

    componentDidMount(){
        postID = this.props.match.params.postID;

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
                <br />
                <Button type="danger" htmlType="submit" onClick={this.handleDeleteSubmit}>Delete</Button>
            </div>
           
        );
    }
}

export default PostDetailView;
