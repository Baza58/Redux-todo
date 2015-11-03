import React from 'react';
import {findDOMNode} from 'react-dom';
import { expect } from 'chai';
import TodoList from '../components/todoList';
import { renderIntoDocument, findRenderedDOMComponentWithTag, findRenderedDOMComponentWithClass, scryRenderedDOMComponentsWithTag,  Simulate } from 'react-addons-test-utils';
import { Map } from 'immutable';

describe('todoList', () => {

	it('renders div and two button', () => {

		const actions = {
			completeAll: () => {},
			undo: () => {},
			completeTodo: () => {},
			updateTodo: () => {},
			removeTodo: () => {},
		};

		const todos = Map({
			todos: Map({
				0: Map({
					id: "0",
					text: 'Lorem',
					completed: false
				}),
				1: Map({
					id: "1",
					text: "Lorem2",
					completed: true
				})
			})
		});

		const component = renderIntoDocument(
				<TodoList actions={actions} todos={todos} />
			);

		const div = findRenderedDOMComponentWithClass(component, 'todos-container');
		
		expect(div.children.length).to.equal(2);

		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(8);
		expect(buttons[0].textContent).to.equal('Edit');
		expect(buttons[1].textContent).to.equal('Save');
		expect(buttons[2].textContent).to.equal('Remove');
		expect(buttons[buttons.length - 2].textContent).to.equal('Complete All!');
		expect(buttons[buttons.length - 1].textContent).to.equal('Undo');

	});

	it('calls completeAll and Undo', () => {
		let calledCompleteAll = false;
		let calledUndo = false;

		const actions = {
			completeAll: () => calledCompleteAll = true,
			undo: () => calledUndo = true,
			completeTodo: () => {},
			updateTodo: () => {},
			removeTodo: () => {},
		};

		const todos = Map({
			todos: Map({
				0: Map({
					id: "0",
					text: 'Lorem',
					completed: false
				}),
				1: Map({
					id: "1",
					text: "Lorem2",
					completed: true
				})
			})
		});

		const component = renderIntoDocument(
				<TodoList actions={actions} todos={todos} />
			);

		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		Simulate.click(buttons[buttons.length - 1]);
		Simulate.click(buttons[buttons.length - 2]);

		expect(calledCompleteAll).to.equal(true);
		expect(calledUndo).to.equal(true);

	});

});