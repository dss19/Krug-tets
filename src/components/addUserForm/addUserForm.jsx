import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addUser, fetchUsers } from "../../store/reducers/ActionCreator";

export default function AddUserForm() {

    let { nextid } = useAppSelector(state => state.userReducer)

    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        email: '',
        id: nextid
    });    

    const dispatch = useAppDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(newUser));
        document.userform.reset();
    }

    const onLoadUsers = () => {
        dispatch(fetchUsers());
        const btn = document.getElementById('load');
        btn.classList.add('d-none'); 
    }

    return (
        <form id="user-form" name="userform" onSubmit={ onFormSubmit }>
            <h3>Add new user</h3>
            <fieldset className="input mb-2">
                <input className="form-control" 
                        type="text" name="name" id="name" 
                        placeholder="Your name" required
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value, id: nextid })}/>
            </fieldset>
            <fieldset className="input mb-2">
                <input className="form-control" 
                        type="text" name="user-name" id="user-name" 
                        placeholder="Your Username" required
                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value, id: nextid })}/>
            </fieldset>
            <fieldset className="input mb-2">
                <input className="form-control" 
                        type="email" name="email" id="email" 
                        placeholder="Your Email" required
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value, id: nextid })}/>
            </fieldset>            
            <button className="btn btn-primary w-100 mb-2" type="submit">Add user</button>
            <button id="load" className="btn btn-success w-100" onClick={ onLoadUsers }>Load all users</button>
        </form>
    )
}