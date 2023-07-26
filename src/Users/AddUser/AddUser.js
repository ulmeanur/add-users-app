import React from 'react';
import classes from './AddUser.module.css';
import Card from '../../components/UI/Card/Card';

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault(); //to prevent reloading the page
		// console.log("username=",event.target.value);
	};

	const onAddUsername = (event) => {
		event.preventDefault();
		// console.log("username=",event.target.value);
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username" onChange={onAddUsername}>
					Username
				</label>
				<input id="username" type="text" />

				<label htmlFor="age">Age(Years)</label>
				<input id="age" type="number" />

				<button type="submit">Add User</button>
			</form>
		</Card>
	);
};

export default AddUser;
