import React from 'react';
import {shallow } from 'enzyme'
// import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('should have the `th` "items"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });
});
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
