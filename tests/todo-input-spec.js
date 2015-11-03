import React from 'react';
import {findDOMNode} from 'react-dom';
import { expect } from 'chai';
import TodoInput from '../components/todoInput';
import { renderIntoDocument, findRenderedDOMComponentWithTag, Simulate } from 'react-addons-test-utils';

describe('TodoInput', () => {
	it('renders label, input and button', () => {
		const component = renderIntoDocument(
				<TodoInput addTodo={function() {}} />
			);

		const label = findRenderedDOMComponentWithTag(component, 'label');
		expect(label.textContent).to.equal('Add Todo');

		const input = findRenderedDOMComponentWithTag(component, 'input');
		expect(input).to.be.ok;

		const button = findRenderedDOMComponentWithTag(component, 'button');
		expect(button.textContent).to.equal('Add todo');
	});

	it('invokes callback on clicking button', () => {
		let payload;

		const component = renderIntoDocument(
				<TodoInput addTodo={(object) => payload = object} />
			);

		const button = findRenderedDOMComponentWithTag(component, 'button');

		Simulate.change(findDOMNode(component.refs.input), { target: { value: 'yo' } });
		Simulate.click(findDOMNode(component.refs.button));

		console.log(payload);

		expect(payload).to.equal('yo');

	});
});