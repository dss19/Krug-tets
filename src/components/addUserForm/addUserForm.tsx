import {FC, FormEvent, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addUser } from "../../store/reducers/ActionCreator";
import {LoadButton} from "../loadButton/loadButton";

export const AddUserForm: FC = () => {

    let { nextid } = useAppSelector(state => state.userReducer)

    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        email: '',
        id: nextid
    });    

    const dispatch = useAppDispatch();

    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addUser(newUser));
        const target = e.target as HTMLFormElement;
        target.reset();
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
            <LoadButton />
        </form>
    )
}