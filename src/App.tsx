import UsersList from './components/usersList/usersList';
import AddUserForm from './components/addUserForm/addUserForm';
import './reset.css';
import './App.css';

function App() {

    return (
        <div className="App">
            <UsersList />
            <AddUserForm />
        </div>
    );
}

export default App;