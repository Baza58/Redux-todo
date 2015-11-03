import React from 'react';
import {findDOMNode} from 'react-dom';
import { expect } from 'chai';
import Todo from '../components/todo';
import { renderIntoDocument, findRenderedDOMComponentWithTag, findRenderedDOMComponentWithClass, scryRenderedDOMComponentsWithTag,  Simulate } from 'react-addons-test-utils';
import { Map } from 'immutable';

describe('todo', () => {
	it('renders component', () => {

		const actions = {
			completeTodo: () => {},
			removeTodo: () => {},
			updateTodo: () => {},
		}

		const component = renderIntoDocument(
				<Todo 	id="1" 
						text="Lorem"
						completed={false}
						key={1}
						completeTodo={actions.completeTodo}
						removeTodo={actions.removeTodo}
						updateTodo={actions.updateTodo} />

			);

		const divs = scryRenderedDOMComponentsWithTag(component, 'div');
		const inputs = scryRenderedDOMComponentsWithTag(component, 'input');
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		const h4 = scryRenderedDOMComponentsWithTag(component, 'h4');

		expect(divs).to.have.length(4);
		expect(inputs).to.have.length(2);
		expect(buttons).to.have.length(3);
		expect(h4).to.have.length(1);

	});

	it('updates todo and invokes updateTodo', () => {
		let updated;

		const actions = {
			completeTodo: () => {},
			removeTodo: () => {},
			updateTodo: (id, text) => updated = text
		}

		const component = renderIntoDocument(
				<Todo 	id="1" 
						text="Lorem"
						completed={false}
						key={1}
						completeTodo={actions.completeTodo}
						removeTodo={actions.removeTodo}
						updateTodo={actions.updateTodo} />
			);

		const editBtn = findRenderedDOMComponentWithClass(component, 'edit-btn');
		const saveBtn = findRenderedDOMComponentWithClass(component, 'save-btn');
		
		Simulate.click(editBtn);
		Simulate.change(component.refs.input, { target: { value: 'New lorem' }});
		Simulate.click(saveBtn);

		expect(updated).to.equal('New lorem');
	});

	it('completes todo and invokes completeTodo', () => {

		let completeId;

		const actions = {
			completeTodo: (id) => completeId = id,
			removeTodo: () => {},
			updateTodo: () => {},
		}

		const component = renderIntoDocument(
				<Todo 	id="1" 
						text="Lorem"
						completed={false}
						key={1}
						completeTodo={actions.completeTodo}
						removeTodo={actions.removeTodo}
						updateTodo={actions.updateTodo} />
			);

		const checkbox = findRenderedDOMComponentWithClass(component, 'todo-checkbox');

		Simulate.change(checkbox, { target: { checked: true } })

		expect(completeId).to.equal("1");
	});

	it('removes todo and invokes updateTodo', () => {
		let removeId;

		const actions = {
			completeTodo: () => {},
			removeTodo: (id) => removeId = id,
			updateTodo: () => {},
		}

		const component = renderIntoDocument(
				<Todo 	id="1" 
						text="Lorem"
						completed={false}
						key={1}
						completeTodo={actions.completeTodo}
						removeTodo={actions.removeTodo}
						updateTodo={actions.updateTodo} />
			);

		const removeBtn = findRenderedDOMComponentWithClass(component, 'remove-button');

		Simulate.click(removeBtn);

		expect(removeId).to.equal("1");

	});
});