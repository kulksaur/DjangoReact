import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';

const { TextArea } = Input;


class CreatePostForm extends React.Component {
    
    handleSubmit(e, requestMethod, postID){
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const author = e.target.elements.author.value;
        const tags = e.target.elements.tags.value;

        switch( requestMethod ){
            case 'put':
                return axios.put(`http://localhost:8000/api/${postID}/`, {
                    title: title,
                    description: description,
                    author:author,
                    tags: tags
                }).then(res => {
                    console.log(res);
                }).catch(err => console.log(err));
            case 'post':
                return axios.post('http://localhost:8000/api/', {
                    title: title,
                    description: description,
                    author:author,
                    tags:tags
                }).then(res => { 
                    console.log(res);
                }).catch(err => console.log(err));
        }

    }

    render() {
        return (
        <div>
            <Form  onSubmit={(e) => this.handleSubmit(e, this.props.requestMethod, this.props.postID)}> 
            <Form.Item label="Title" >
                <Input required name="title" placeholder="Please enter a title" />
            </Form.Item>
            <Form.Item label="Description" >
            <TextArea required name="description" rows={4} placeholder="Please enter a description" />
            </Form.Item>
            <Form.Item label="Author">
                <Input  required name="author" placeholder="Please enter a author" />
            </Form.Item>
            <Form.Item label="Tags">
                <Input  required name="tags" placeholder="Enter comma after each value" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" >{this.props.btnTxt}</Button>
            </Form.Item>
            </Form>
        </div>
        );
    }
}

export default CreatePostForm;