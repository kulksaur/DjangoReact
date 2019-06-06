import React from 'react';
import { Table} from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
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
    dataIndex: 'tags',
    key: 'tags',
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

//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <span>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </span>
//     ),
//   }
];
const onRowClick = (record, index,event) => {
    if (typeof window !== 'undefined') {
        window.location.href = `http://localhost:3000/${record.id}`;
   }
   
}

const PostsTable = (props) => {
    
    return (
        <Table columns={columns} dataSource={props.data} rowKey="id" onRow={(record, index) => ({
          onClick: (event) => { onRowClick(record, index, event) } 
        })}/>
    );
}

export default PostsTable;
