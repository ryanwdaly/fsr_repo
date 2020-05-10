import React from 'react';
import {shallow } from 'enzyme'
// import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  describe('the user populates the input', () => {
    const item = 'Vancouver';

    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: { value: item }
      })
    });

    it('should update the state property `item`', () => {
      expect(
        wrapper.state().item
      ).toEqual(item)
    });

    it('should enable `button`', () => {
      const button = wrapper.find('button').first();
      expect(
        button.props().disabled
      ).toBe(false);
    });

    describe('and clears the input feild', () => {
      beforeEach(() => {
        const input = wrapper.find('input').first();
        input.simulate('change', {
          target: { value: '' }
        })
      });
      
      it('should disable `button`', () => {
        const button = wrapper.find('button').first();
        expect(
          button.props().disabled
          ).toBe(true);
      });
    });
  });



  it('should have the `th` "items"', () => {
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });

  it('should have a `button` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <button>Add item</button>
      )
    ).toBe(true);
  });

  it('button should be disabled', () => {
    const button = wrapper.find('button').first();
    expect(
      button.props().disabled
    ).toBe(true);
  });
});
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
