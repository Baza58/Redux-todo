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
			<div>
				<span>{text}</span>
				<input type="checkbox" checked={this.props.completed} onChange={this.onChange} />
				<button onClick={this.onClick} >Remove</button> 
				{this.props.id}
			</div>
		);
	}
}

export default Todo;