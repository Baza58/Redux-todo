import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../reducers/todo-reducer';
import * as Actions from '../constants/todo-constants';

describe('reducer', () => {

	it('adds todo', () => {
		const state = Map({
			todos: 
				Map({
					0: Map({
						id: "0",
						text: 'Keep on coding!',
						completed: false
					}),
				})
		});

		const action = {
			type: Actions.ADD_TODO,
			text: 'Add new todo'
		}

		const nextState = reducer(state, action);

		expect(nextState).to.equal(Map({
			todos: 
				Map({
					0: Map({
						id: "0",
						text: 'Keep on coding!',
						completed: false
					}),
					1: Map({
						id: "1",
						text: 'Add new todo',
						completed: false
					})
				})
		}));
	});

	it('removes todo', () => {
		const state = Map({
			todos: 
				Map({
					0: Map({
						id: "0",
						text: 'Keep on coding!',
						completed: false
					}),
					1: Map({
						id: "1",
						text: 'Add new todo',
						completed: false
					})
				})
			});
		const action = {
			type: Actions.REMOVE_TODO,
			id: '1'
		}

		const nextState = reducer(state, action);

		expect(nextState).to.equal(Map({
			todos: 
				Map({
					0: Map({
						id: "0",
						text: 'Keep on coding!',
						completed: false
					})
				})
			}))
	});

	it('updates todo', () => {
		const state = Map({
			todos: 
				Map({
					0: Map({
						id: "0",
						text: 'Keep on coding!',
						completed: false
					})
				})
			});
		const action = {
			type: Actions.UPDATE_TODO,
			id: "0",
			text: 'Updated todo'
		} 

		const nextState = reducer(state, action);

		expect(nextState).to.equal(Map({
			todos: 
				Map({
					0: Map({
						id: "0",
						text: 'Updated todo',
						completed: false
					})
				})
			}))
	});

	it('marks todo as completed', () => {
		const state = Map({
			todos: Map({
			0: Map({
				id: "0",
				text: 'Keep on coding!',
				completed: false
			})
		})
		});

		const action = {
			type: Actions.COMPLETE_TODO,
			id: "0"
		}
		
		const nextState = reducer(state, action);
		
		expect(nextState).to.equal(Map({
			todos: Map({
				0: Map({
				id: "0",
				text: 'Keep on coding!',
				completed: true
			})
			})
		}))
	});

	it('marks all todos as completed', () => {
		const state = Map({
			todos: 
				Map({
					0: Map({
						id: "0",
						text: 'Keep on coding!',
						completed: true
					}),
					1: Map({
						id: "1",
						text: 'Add new todo',
						completed: false
					})
				})
			});

		const action = {
			type: Actions.COMPLETE_ALL
		}

		const nextState = reducer(state, action);

		expect(nextState).to.equal(Map({
			todos: 
				Map({
					0: Map({
						id: "0",
						text: 'Keep on coding!',
						completed: true
					}),
					1: Map({
						id: "1",
						text: 'Add new todo',
						completed: true
					})
				})
			}))
	});
});
