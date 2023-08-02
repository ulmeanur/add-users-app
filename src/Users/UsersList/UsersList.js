import React from 'react';
import classes from './UsersList.module.css';
import Card from '../../components/UI/Card/Card';

const UsersList = (props) => {
	return (
		<React.Fragment>
			{(props.users.length > 0) &&
				(<Card className={classes['users-list']}>
					<ul>
						{props.users.map((user) => (
							<li key={user.id}>
								{user.username}, {user.age} years old
							</li>
						))}
					</ul>
				</Card>)
			}
		</React.Fragment>
	);
};

export default UsersList;
