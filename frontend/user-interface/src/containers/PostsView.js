import React from 'react';
import PostsTable from '../components/PostsTable';
import axios from 'axios';
import CreatePostForm from '../components/CreatePostForm';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

// Container which holds the PostsTable component (Table data)
class PostsView extends React.Component{

    state = {
        posts: []
     }

    componentDidMount(){
        // Making a get_all request to fetch all the posts from the server
        axios.get('http://localhost:8000/api/')
        .then(res => {
            res.data.map((post) => {
                if(post.description.length > 150){
                    // If the description field is too big, trim it
                    post.description = post.description.substring(0,50)+" ..........";
                }
                return post.tags = post.tags.split(",");
            });
            this.setState({
                posts: res.data
            });
        });
    }
    render(){
        return(
            <div>
                <PostsTable data={this.state.posts} />
                <br /> 
                {/* Collapsible portion to hold a form to create new Post */}
                <Collapse>
                    <Panel header="Create a new post">
                        <CreatePostForm requestMethod ='post' postID={null} btnTxt="Create"/>
                    </Panel>
                </Collapse>
            </div>
            
        );
    }
}

export default PostsView;
