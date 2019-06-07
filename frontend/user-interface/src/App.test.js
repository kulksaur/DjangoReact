import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import CreatePostForm from './components/CreatePostForm';
import PostsTable from './components/PostsTable';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });
describe('Check if the CreatePostForm Component has Form in it', function() {
  it('Checks presence', function() {
    const wrapper = shallow(<CreatePostForm />);
    expect(wrapper.find('Form')).to.have.length(1);
  });
});

describe('Check if the PostsTable Component has table in it', function() {
  it('Checks presence', function(){
    const wrapper = shallow(<PostsTable />);
    expect(wrapper.find('Table')).to.have.length(1);
  })
})

