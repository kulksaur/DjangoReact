import React from 'react';
import { Table, Tag} from 'antd';

// Specifying the columns of the table
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
    {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags ? tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        }): <Tag> </Tag>}
      </span>
    ),
  },
  {
    title: 'Created At',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Updated At',
    dataIndex: 'updated_at',
    key: 'updated_at',
  }

];

// On row click route to the detailed view for that Post
const onRowClick = (record, index,event) => {
    if (typeof window !== 'undefined') {
        window.location.href = `http://localhost:3000/${record.id}`;
   }
   
}

// Posts Table component to view the table of all the Posts
const PostsTable = (props) => {
    return (
        <Table columns={columns} style={{'overflow':'wrap'}} dataSource={props.data} pagination={{defaultPageSize: 10}} rowKey="id" onRow={(record, index) => ({
        onClick: (event) => { onRowClick(record, index, event) } 
        })}/>
    );
}

export default PostsTable;
