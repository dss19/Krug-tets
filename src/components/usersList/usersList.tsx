import { User } from "../user/user";
import { useAppSelector } from "../../hooks/redux";
import {FC} from "react";

export const UsersList: FC = () => {
    
    const { users, isLoading, error } = useAppSelector(state => state.userReducer)

    return (
        <ul className="users--list">
            <h1>Users</h1>
            {users.map((item) => <User key={ item.id } user={item}/>)}
            {isLoading && <h5 className="mt-2">Loading</h5>}
            {error && <h5 className="mt-2">{error}</h5>}
        </ul>        
    );
}