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
		this.refs.input.focus();
	}

	onKeyDown = (e) => {
		if (e.keyCode === 13 ) this.onClick();
	}

	render = () => {
		return (
			<div className="todo-input-container">
				<label htmlFor="input">Add Todo</label>
				<input  type="text"
						id="input" 
						className="form-control" 
						value={this.state.enteredText}
						ref="input" 
						onChange={this.onChange} 
						onKeyDown={this.onKeyDown} />
				<button onClick={this.onClick} 
						className="btn btn-primary btn-submit" >
							Add todo
				</button>
			</div>
		);
	}
}

export default TodoInput;