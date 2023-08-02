import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';
import Wrapper from '../../components/Helpers/Wapper/Wapper';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault(); //to prevent reloading the page
		console.log('submit form');
		console.log('username=', enteredUsername);
		console.log('age=', enteredAge);

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length < 0) {
			console.log('Failed to submit form');
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}

		if (+enteredAge < 0) {
			console.log('Failed to submit form');
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (> 0).',
			});
			return;
		}

		console.log('Success - form was submitted');
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (event) => {
		console.log('username=', event.target.value);

		setEnteredUsername(event.target.value);

		if (enteredUsername.trim().length === 0) {
			console.log('error - not a valid username');
		}
	};

	const ageChangeHandler = (event) => {
		console.log('age=', event.target.value);

		setEnteredAge(event.target.value);

		if (enteredAge.trim().length < 0 || +enteredAge < 0) {
			console.log('error - not a valid age');
		}
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}

			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>

					<label htmlFor="age">Age(Years)</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					/>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
