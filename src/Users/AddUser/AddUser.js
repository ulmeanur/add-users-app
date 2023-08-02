import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';
import Wrapper from '../../components/Helpers/Wapper/Wapper';

const AddUser = (props) => {
	const [error, setError] = useState();
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const addUserHandler = (event) => {
		event.preventDefault(); //to prevent reloading the page

		const enteredUser = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		console.log('submit form');
		console.log('username=', enteredUser);
		console.log('age=', enteredUserAge);

		if (enteredUser.trim().length === 0 || enteredUserAge.trim().length < 0) {
			console.log('Failed to submit form');
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}

		if (+enteredUserAge < 0) {
			console.log('Failed to submit form');
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (> 0).',
			});
			return;
		}

		console.log('Success - form was submitted');

		props.onAddUser(enteredUser, enteredUserAge);

		nameInputRef.current.value = '';
		ageInputRef.current.value = '';

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
						ref={nameInputRef}
					/>

					<label htmlFor="age">Age(Years)</label>
					<input
						id="age"
						type="number"
						ref={ageInputRef}
					/>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
