// =============================== 
// we use props to read the properties added on the component

// =============================== 


//State Management in React
// is used to update the state with every keystroke (onChange)
// and save what the user enters in such a state variable.

import React, {useState} from 'react';

// =============================== 
// create a React component

import React, {useState} from 'react';
import './AddUser.css'
 
const AddUser = (props) => {
    console.log("add user");
    

    const [enteredUsername, setEnteredUsername] = useState('');
    // also useState can save data as an object {} where we use prev State to update the current one

	const addUserHandler = (event) => {
		event.preventDefault(); //to prevent reloading the page
		console.log('submit form');
	};

	const usernameChangeHandler  = (event) => {
		console.log("username=",event.target.value);
    
        setEnteredUsername(event.target.value);
	};

    return (
        <div>
            <form onSubmit={addUserHandler}>
				<label htmlFor="username" onChange={usernameChangeHandler}>
					Username
				</label>
				<input id="username" type="text" />

                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUser;


// =============================== 

//In order to have classes that apply only on the component 
//and not globally to avoid messing around other components
// we should use module.css provided by React or install styled-components

import classes from './Card.module.css'

<div className={classes["card"]}>{props.children}</div>

// =============================== 

//create a re-usable Card component
//that should output what's passed between the opening and closing tags off card
// using props.children
// As it is a custom component in order to know about the classes added on it
// we need to use template literals {`${props.className}`} to inject dinamically the classes
// we use props to read the properties added on the component


import React from 'react';
import classes from './Card.module.css'
 
const Card = (props) => {
    return (
        <div className={`${classes["card"]} ${props.className}`}>{props.children}</div>
    )
}

export default Card;

// =============================== 

//create a re-usable Button component

import React from 'react';
import classes from './Button.module.css'
 
const Button = (props) => {
    return (
        <button
			className={`${classes.button} ${props.className ? props.className : ''}`}
			type={props.type || 'button'}
            onClick={props.onClick}
		>
			{props.children}
		</button>
    )
}

export default Button;

// in a separate file call the component
<Button type="submit">Add User</Button>


// =============================== 

//when you need to update the previous state with the current one 
//we need to add a function to the setter and use prev...

  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {username: uName, age: uAge, id:  Math.random().toString()}
      ];
    });
  };

// // =============================== 
// go through each element of the array using map and an anonymous func as param
// add key as React needs to identify each elem added dinamically

<ul>
    {props.users.map((user) => (
        <li key={user.id}>
            {user.username}, {user.age} years old
        </li>
    ))}
</ul>

// =============================== 

// Add conditional html

const UsersList = (props) => {
	const error = true;
	return (
		<div>
			{(props.users.length > 0) &&
				(<Card>
                        ...
				</Card>)
			}
		</div>
	);
};


//=========================