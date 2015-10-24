import React, { Component } from 'react';

class Todo extends Component {
	state = {
		editing: false,
		text: this.props.text
	}

	onChange = () => {
		this.props.completeTodo(this.props.id);
	}
	onClick = () => {
		this.props.removeTodo(this.props.id);
	}
	handleEditing = (e) => {
		this.setState({
			text: e.target.value 
		});
	}
	editTodo = (e) => {
		this.setState({
			editing: !this.state.editing 
		});
		this.refs.input.focus();
		
	}
	onKeyDown = (e) => {
		if (e.keyCode === 13) this.saveEdit();
	}
	saveEdit = (e) => {
		const text = this.refs.input.value;
		if (!text) return;
		this.props.updateTodo(this.props.id, text);
		this.setState({
			editing: false 
		});
	}
	render = () => {
		const { id, text, completed } = this.props;
		const { editing } = this.state;
		return (
			<div className="todo-container row">
				<div className="col-xs-1" >
					<input  type="checkbox" 
							checked={this.props.completed} 
							className="todo-checkbox" 
							onChange={this.onChange} />
				</div>
				<div className="col-xs-6 todo-heading-container">
					<h4 className="todo-heading" 
						style={{display: editing ? 'none' : 'initial'}} >
							{text}
					</h4>
					<input  type="text"
							className="form-control"
							style={{display: editing ? 'inline' : 'none'}}
							ref="input" 
							value={this.state.text} 
							onKeyDown={this.onKeyDown} 
							onChange={this.handleEditing} />
				</div>
				<div className="col-xs-5">
					<button className="btn btn-default" style={{display: editing ? 'none' : 'initial'}} onClick={this.editTodo} >Edit</button>
					<button className="btn btn-success" style={{display: editing ? 'inline' : 'none'}} onClick={this.saveEdit} >Save</button> 
					<button className="btn btn-default remove-button" onClick={this.onClick} >Remove</button> 
				</div>
			</div>
		);
	}
}

export default Todo;