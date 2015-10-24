import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {
	render = () => {
		const { todos, actions } = this.props;
		let todoNodes = todos.map((todo, i) => {
			return <Todo id={todo.id}
						 text={todo.text}
						 completed={todo.completed}
						 key={i}
						 completeTodo={actions.completeTodo}
						 removeTodo={actions.removeTodo}
						 updateTodo={actions.updateTodo} />
		});
		return (
			<div className="todo-list-container" >
				{todoNodes}
			<button className="btn btn-danger" 
					onClick={actions.completeAll.bind(this)} 
					style={{display: todos.length ? 'inline' : 'none'}} >Toggle Complete All!</button>
			</div>
			
		);
	}
}

export default TodoList;