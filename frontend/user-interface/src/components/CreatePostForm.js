import React from 'react';
import { Form, Input, Button} from 'antd';
const { TextArea } = Input;

class CreatePostForm extends React.Component {
 

  render() {
    return (
      <div>
        <Form> 
          <Form.Item label="Title">
            <Input placeholder="Please enter a title" />
          </Form.Item>
          <Form.Item label="Description">
          <TextArea rows={4} placeholder="Please enter a description" />
          </Form.Item>
          <Form.Item label="Author">
            <Input placeholder="Please enter a author" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CreatePostForm;