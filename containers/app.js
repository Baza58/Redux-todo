import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/todo-actions';
import App from '../components/app';
import {toSeq} from 'immutable';

function mapStateToProps(state) {
	return {
		todos: state.todos.present
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);