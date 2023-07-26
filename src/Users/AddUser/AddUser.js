import React from 'react';
import classes from './AddUser.module.css';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault(); //to prevent reloading the page
		console.log("submit form");
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

				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
