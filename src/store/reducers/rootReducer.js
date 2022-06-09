const initialState = {
	users: [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Le Thai Son' },
		{ id: 3, name: 'Le Huu Sang' },
	],
	post: [],
};
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DELETE_USER':
			// console.log('run into delete user', action);
			let users = state.users;
			users = users.filter((item) => item.id !== action.payload.id);
			return {
				...state,
				users,
			};
		case 'ADD_USER':
			let id = Math.floor(Math.random() * 500);
			let user = { id: id, name: `random - ${id}` };
			return {
				...state,
				users: [...state.users, user],
			};
		default:
			return state;
	}
};
export default rootReducer;
