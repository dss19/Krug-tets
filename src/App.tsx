import {FC} from 'react';
import './reset.css';
import './App.css';
import {UsersList} from "./components/usersList/usersList";
import {AddUserForm} from "./components/addUserForm/addUserForm";

export const App: FC = () => {
    return (
        <div className="App">
            <UsersList/>
            <AddUserForm />
        </div>
    );
}
