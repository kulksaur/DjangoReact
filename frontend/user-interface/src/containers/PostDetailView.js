import React from 'react';
import axios from 'axios';
import CreatePostForm from '../components/CreatePostForm';
import { Collapse , Button} from 'antd';
import { Card } from 'antd';

const Panel = Collapse.Panel;

let postID = null;

// Component for Detailed View of the Post
class PostDetailView extends React.Component{
    
    state = {
        post: {}
     }

    //  Function to handle the delete button submit
     handleDeleteSubmit(){
        //  Making a delete request to the server to delete a particular post by its postID
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

        // Making the getById Request to the server to get its data
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
                    <b><p>Source - {this.state.post.author}</p></b>
                </Card>

                <br />
                {/* Collapsible portion holding the form 
                    to update the post
                 */}
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
