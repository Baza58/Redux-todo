import React, { Component } from 'react';
import Todo from './todo';
import ImmutablePropTypes from 'react-immutable-proptypes';

class TodoList extends Component {
	render = () => {
		
		const { todos, actions } = this.props;
		let todoNodes = todos.get('todos').valueSeq().map((todo, i) => {
			
			return <Todo id={todo.get('id')}
						 text={todo.get('text')}
						 completed={todo.get('completed')}
						 key={todo.get('id')}
						 completeTodo={actions.completeTodo}
						 removeTodo={actions.removeTodo}
						 updateTodo={actions.updateTodo} />
		});
		
		return (
			<div className="todo-list-container" >
				{todoNodes}
			<button className="btn btn-danger" 
					onClick={actions.completeAll.bind(this)} 
					style={{display: todos.get('todos').count() > 0 ? 'inline' : 'none'}} >Complete All!
			</button>
			{' '}
			<button className="btn btn-default" 
					onClick={actions.undo.bind(this)}>
				undo
			</button>
			</div>
			
		);
	}
}

TodoList.propTypes = {
	todos: ImmutablePropTypes.mapOf(ImmutablePropTypes.map),
	actions: React.PropTypes.object.isRequired
}

export default TodoList;