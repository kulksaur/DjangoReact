import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import CreatePostForm from './components/CreatePostForm';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });
describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<CreatePostForm />);
    expect(wrapper.find('Form')).to.have.length(1);
  });
});