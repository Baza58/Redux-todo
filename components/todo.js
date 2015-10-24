import React, { Component } from 'react';

class Todo extends Component {
	onChange = () => {
		this.props.completeTodo(this.props.id);
	}
	onClick = () => {
		this.props.removeTodo(this.props.id);
	}

	render = () => {
		const { id, text, completed } = this.props;
		

		return (
			<div className="todo-container row">
				<div className="col-xs-1" >
					<input type="checkbox" checked={this.props.completed} className="todo-checkbox" onChange={this.onChange} />
				</div>
				<div className="col-xs-7 todo-heading-container">
					<h4 className="todo-heading">{text}</h4>
				</div>
				<div className="col-xs-4">
					<button className="btn btn-default remove-button" onClick={this.onClick} >Remove</button> 
				</div>
			</div>
		);
	}
}

export default Todo;