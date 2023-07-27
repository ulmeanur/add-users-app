import React, {useState} from 'react';
import AddUser from './Users/AddUser/AddUser';
import UsersList from './Users/UsersList/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    //when you need to update the previous state with the current one 
    //we need to add a function to the setter and use prev...
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {id: Math.random.toString(), username: uName, age: uAge}
      ];
    });
  };

  console.log("usersList = ", usersList);

    return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App;
