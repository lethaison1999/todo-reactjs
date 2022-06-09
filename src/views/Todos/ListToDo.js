import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import Color from '../example/HOC/Color';
class ListToDo extends React.Component {
	state = {
		listToDos: [
			{ id: 'todo1', title: 'Doing homework' },
			{ id: 'todo2', title: 'Making videos' },
			{ id: 'todo3', title: 'Fixing bugs' },
		],
		editTodo: {},
	};
	addNewTodo = (todo) => {
		this.setState({
			listToDos: [...this.state.listToDos, todo],
		});
		toast.success('Add todo easy');
	};
	handleDeleteTodo = (todo) => {
		let currentTodo = this.state.listToDos;
		currentTodo = currentTodo.filter((item) => item.id !== todo.id);
		this.setState({
			listToDos: currentTodo,
		});
		toast.success('delete todo!!!');
	};
	handleEditTodo = (todo) => {
		let { editTodo, listToDos } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		//save
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let listTodocopy = [...listToDos];
			let objIndex = listTodocopy.findIndex(
				(item) => item.id === todo.id
			);
			listTodocopy[objIndex].title = editTodo.title;

			this.setState({
				listToDos: listTodocopy,
				editTodo: {},
			});
			toast.success('Save');
			return;
		}

		//edit
		this.setState({
			editTodo: todo,
		});
	};
	handleChangeEditTodo = (event) => {
		let editTodocopy = { ...this.state.editTodo };
		editTodocopy.title = event.target.value;
		this.setState({
			editTodo: editTodocopy,
		});
	};

	render() {
		let { listToDos, editTodo } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		console.log('log isemptyObj', isEmptyObj);

		//let listToDos =this.state.listTodos
		return (
			<>
				<p>Simple TODO Apps with React.JS</p>
				<div className="list-todo-container">
					<AddTodo addNewToDo={this.addNewTodo} />
					<div className="list-todo-content">
						{listToDos &&
							listToDos.length > 0 &&
							listToDos.map((item, index) => {
								return (
									<div className="todo-child" key={item.id}>
										{isEmptyObj === true ? (
											<span>
												{index + 1} - {item.title}
											</span>
										) : (
											<>
												{editTodo.id === item.id ? (
													<span>
														{index + 1} -{' '}
														<input
															value={
																editTodo.title
															}
															onChange={(event) =>
																this.handleChangeEditTodo(
																	event
																)
															}
														/>
													</span>
												) : (
													<span>
														{index + 1} -{' '}
														{item.title}
													</span>
												)}
											</>
										)}
										<button
											className="edit"
											onClick={() =>
												this.handleEditTodo(item)
											}
										>
											{isEmptyObj === false &&
											editTodo.id === item.id
												? 'Save'
												: 'Edit'}
										</button>

										<button
											className="delete"
											onClick={() =>
												this.handleDeleteTodo(item)
											}
										>
											Delete
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</>
		);
	}
}
export default Color(ListToDo);
