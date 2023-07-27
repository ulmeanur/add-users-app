import React from 'react';
import classes from './UsersList.module.css';
import Card from '../../components/UI/Card/Card';

const UsersList = (props) => {
	return (
		<Card className={classes['users-list']}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.username}, {user.age} years old
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
