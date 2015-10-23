import React, { Component } from 'react';

class TodoInput extends Component {
	state = {
		enteredText: ''
	}
	onChange = (e) => {
		this.setState({
			enteredText: e.target.value 
		});
	}

	onClick = (e) => {
		let text = e.target.value;
		if (!text) {
			return;
		}
		this.props.addTodo(text);
		text = '';

	}

	render = () => {
		return (
			<div>
				<input type="text" onChange={this.onChange} value={this.state.enteredText} />
				<button onClick={this.onClick}>Add todo</button>
			</div>
		);
	}
}

export default TodoInput;