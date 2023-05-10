import CreateUser from "../createUser/createUser";
import { useAppSelector } from "../../hooks/redux";

export default function UsersList() { 
    
    const { isLoading, error } = useAppSelector(state => state.userReducer)

    return (
        <ul className="users--list">
            <h1>Users</h1>
            <CreateUser />
            {isLoading && <h5 className="mt-2">Loading</h5>}
            {error && <h5 className="mt-2">{error}</h5>}
        </ul>        
    );
}