import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/todo-actions';
import App from '../components/app';

function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);