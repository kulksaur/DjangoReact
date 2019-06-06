import React from 'react';
import PostsTable from '../components/PostsTable';
import axios from 'axios';
import CreatePostForm from '../components/CreatePostForm';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

class PostsView extends React.Component{

    state = {
        posts: []
     }

    componentDidMount(){
        axios.get('http://localhost:8000/api/')
        .then(res => {
            res.data.map((post) => {
                post.description = post.description.substring(0,50)+"..........";
                return post.tags = post.tags.split(",");
            });
            this.setState({
                posts: res.data
            });
            console.log(res.data);
        });
    }
    render(){
        return(
            <div>
                <PostsTable data={this.state.posts} />
                <br /> 
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
