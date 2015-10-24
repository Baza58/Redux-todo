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
		if (!text) return;
		this.props.addTodo(text);
		this.setState({
			enteredText: '' 
		});
	}

	render = () => {
		return (
			<div className="todo-input-container">
				<label htmlFor="input">Add Todo</label>
				<input type="text" id="input" className="form-control" ref="input" onChange={this.onChange} value={this.state.enteredText} />
				<button onClick={this.onClick} className="btn btn-primary btn-submit" >Add todo</button>
			</div>
		);
	}
}

export default TodoInput;