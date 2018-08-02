import {apiCall} from "../../services/api";
import {SET_CURRENT_USER} from "../actionTypes";

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function authUser(type, userData) {
	return dispatch => {
		// wrap our thunk in a promise and wait for the api call
		return new Promise((resolve, reject) => {
			return apiCall("post", `/api/auth/${type}`, userData).then(
				({ token, ...user }) => {
					localStorage.setItem("jwtToken", token);
					dispatch(setCurrentUser(user));
					resolve(); // Indicate that the api call was successful
				})
			.catch (err => {
				reject(); // Indicate that the api call was unsuccessful
			});
		});
	};
}
