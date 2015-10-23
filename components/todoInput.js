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
		let text = this.refs.input.value;
		this.props.addTodo(text);
		this.setState({
			enteredText: '' 
		});

	}

	render = () => {
		return (
			<div>
				<input type="text" ref="input" onChange={this.onChange} value={this.state.enteredText} />
				<button onClick={this.onClick}>Add todo</button>
			</div>
		);
	}
}

export default TodoInput;